import { test, expect } from '@jest/globals';
import type { TransformArray } from '../src/math/transform-2d';
import { T2D } from '../src/math/transform-2d';
import { Degrees, Radians } from '../src/models/rotation';



test('rotate Should Calculate Correctly', () => {
  const theta = Radians(Degrees(30));
  const transformed = T2D.Build.rotation(theta);

  expect(transformed.scale.x).toBeCloseTo(0.866025);
  expect(transformed.skew.y.value).toBeCloseTo(0.5);
  expect(transformed.skew.x.value).toBeCloseTo(-0.5);
  expect(transformed.scale.y).toBeCloseTo(0.866025);

  expect(transformed.translate.x).toBe(0);
  expect(transformed.translate.y).toBe(0);
});

test('array should survive round trip', () => {
  const expected:TransformArray = [0.866025, 0.5, -0.5, 0.866025, 0, 0];
  const transform = T2D.Form.fromArray(expected);
  const actual = T2D.Form.toArray(transform);

  expect(actual).toStrictEqual(expected);
});

test('matrix should survive round trip', () => {
  const expected:TransformArray = [0.866025, 0.5, -0.5, 0.866025, 0, 0];
  const original = T2D.Form.fromArray(expected);
  const matrix = T2D.Form.toMatrix(original);
  const rehydrated = T2D.Form.fromMatrix(matrix);

  const actual = T2D.Form.toArray(rehydrated);

  expect(actual).toStrictEqual(expected);
});

test('css generate properly', () => {
  const a:TransformArray = [0.866025, 0.5, -0.5, 0.866025, 0, 0];
  const t = T2D.Form.fromArray(a);
  const actual = T2D.Form.toCssTransform(t);
  const expected = 'transform: matrix(0.866025, 0.5, -0.5, 0.866025, 0, 0);';

  expect(actual).toStrictEqual(expected);
});
