import { Point } from './point';
import { Radians } from './rotation';
import type {Branded} from './branded';
import {brand,hasBrand} from './branded';

type Kind = 'Rotate';
const kind:Kind='Rotate';

export interface Rotate extends Branded<Kind>{
  readonly theta:Radians;
  readonly origin:Point;
}

export const Rotate = (theta:Radians, origin:Point) => 
  brand(kind,{theta,origin});

Rotate.isInstance=(value: unknown): value is Rotate =>
  hasBrand(kind,value);

