import { Point } from './point';
import { Radians } from './rotation';
import type {Branded} from './branded';
import {brand,hasBrand} from './branded';

type Kind = 'Mirror';
const kind:Kind='Mirror';

export interface Mirror extends Branded<Kind>{
  readonly axis:Radians;
  readonly origin:Point;
}

export const Mirror = (axis:Radians, origin:Point) => 
  brand(kind,{axis,origin});

Mirror.isInstance=(value: unknown): value is Mirror =>
  hasBrand(kind,value);

