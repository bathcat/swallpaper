import type { Branded } from './branded';
import { brand } from './branded';

type Kind = 'Point';
const kind:Kind='Point';

export interface Point extends Branded<Kind>{
  x:number;
  y:number;
}

export const Point = (x:number, y:number):Point => 
  brand(kind, {x,y});
