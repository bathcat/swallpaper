import { T2D } from './math/transform-2d';
import { Matrix2d } from './math/matrix';
import { Command, match } from './models/operation';
import { Point } from './models/point';
import { Radians } from './models/rotation';
import { Transform2d } from './models/transformation';
import { pipe } from "fp-ts/function";



export namespace TransformState{

  const multiply=(ts:Transform2d[]) => pipe(
    ts.map(T2D.Form.toMatrix),
    Matrix2d.multiply,
    T2D.Form.fromMatrix
  );

  const displace=(transform:Transform2d, origin:Point)=> 
    multiply([
      T2D.Build.translation(origin.x, origin.y),
      transform,
      T2D.Build.translation(-1 * origin.x, -1 * origin.y)
    ]);

  export function rotate(current:Transform2d, theta:Radians, origin:Point):Transform2d {
    const multiplier = T2D.Get.determinant(current);
    const thetaAdjusted = Radians(theta.value * multiplier);

    const r = T2D.Build.rotation(thetaAdjusted);

    return multiply([
      current,
      displace(r, origin),
    ]);
  }

  export function mirror(current:Transform2d, axis:Radians, origin:Point):Transform2d {
    const adjustedAxis = Radians(axis.value - T2D.Get.rotation(current).value);

    return multiply([
      current,
      displace(T2D.Build.reflection(adjustedAxis), origin),
    ]);
  }

}

export const toTransform=(current:Transform2d, cmd:Command)=>
  match({
    mirror:m=>TransformState.mirror(current, m.axis, m.origin),
    rotate:r=>TransformState.rotate(current, r.theta, r.origin),
    reset:_=>T2D.Get.identity
  })(cmd);
