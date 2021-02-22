import * as mathjs from 'mathjs';

export namespace Matrix2d{

  export type Transformation = [
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ];

  export const identity:Transformation = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  function multiplyBinary(a:Transformation, b:Transformation):Transformation {
    return mathjs.multiply(a, b);
  }

  export const multiply = (ts:Transformation[]) =>
    ts.reduce(multiplyBinary, identity);

}
