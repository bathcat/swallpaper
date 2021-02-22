import { Matrix2d } from './matrix';
import { Radians } from '../models/rotation';
import {
  Scale, Skew, Transform2d, Translate,
} from '../models/transformation';

export type TransformArray = [number, number, number, number, number, number];

export namespace T2D{

  export namespace Build{

    export const translation = (x:number, y:number):Transform2d => ({
      translate: Translate(x, y),
      scale: Scale(1, 1),
      skew: Skew(0, 0),
    });

    export function rotation(theta:Radians):Transform2d {
      const thetaN = theta.value;
      return {
        translate: Translate(0, 0),
        scale: Scale(Math.cos(thetaN), Math.cos(thetaN)),
        skew: Skew(Radians(-1 * Math.sin(thetaN)), Radians(Math.sin(thetaN))),
      };
    }

    export function reflection(theta:Radians):Transform2d {
      const thetaN = theta.value;
      return {
        translate: Translate(0, 0),
        scale: Scale(Math.cos(2 * thetaN), -1 * Math.cos(2 * thetaN)),
        skew: Skew(Radians(Math.sin(2 * thetaN)), Radians(Math.sin(2 * thetaN))),
      };
    }

  }

  type Matrix = Matrix2d.Transformation;

  export namespace Form{

    export const toMatrix = (t:Transform2d):Matrix => [
      [t.scale.x, t.skew.x.value, t.translate.x],
      [t.skew.y.value, t.scale.y, t.translate.y],
      [0, 0, 1],
    ];

    export const fromMatrix = (m:Matrix):Transform2d => ({
      scale: Scale(m[0][0], m[1][1]),
      skew: Skew(m[0][1], m[1][0]),
      translate: Translate(m[0][2], m[1][2]),
    });

    export function fromArray(ns:TransformArray):Transform2d {
      if (ns?.length !== 6) {
        throw new Error('Bogus argument');
      }
      const [a, b, c, d, e, f] = ns;
      return {
        scale: Scale(a, d),
        skew: Skew(c, b),
        translate: Translate(e, f),
      };
    }

    export const toArray = (t:Transform2d):TransformArray => [
      t.scale.x,
      t.skew.y.value,
      t.skew.x.value,
      t.scale.y,
      t.translate.x,
      t.translate.y,
    ];

    export const toCssTransform = (t:Transform2d):string => `transform: matrix(${toArray(t).join(', ')});`;
  }

  export namespace Get{

    export const identity = Form.fromMatrix(Matrix2d.identity);

    export const determinant = (t:Transform2d):number =>
      t.scale.x * t.scale.y - t.skew.x.value * t.skew.y.value;

    export function rotation(t:Transform2d):Radians {
      const [,b,,d] = Form.toArray(t);
      return Radians(Math.atan2(b, d));
    }

  }

}
