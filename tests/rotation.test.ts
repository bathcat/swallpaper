import { test, expect } from '@jest/globals';
import { Degrees, Radians } from '../src/models/rotation';


test('180 Degrees should be pi radian', () => {
  const deg = Degrees(180);
  const rad = Radians(deg);
  const result = rad.value;

  expect(result).toBe(Math.PI);
});

test('180 Degrees should round-trip', () => {
  const expected = 180;
  const deg = Degrees(expected);
  const actual = deg.value;
  expect(actual).toBe(expected);
});
