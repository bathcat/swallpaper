import { Branded, brand } from './branded';
import { Radians, Rotation } from './rotation';

export interface Skew extends Branded<'Skew'>{
  x:Radians;
  y:Radians;
}

export const Skew = (x:Rotation, y:Rotation) => brand('Skew',{
  x: Radians(x),
  y: Radians(y),
});

/// /

export interface Scale extends Branded<'Scale'>{
  x:number;
  y:number;
}

export const Scale = (x:number, y:number) => brand('Scale',{ 
  x, 
  y, 
});

///
//TODO: Consider making these pixels.
export interface Translate extends Branded<'Translate'>{
  x:number;
  y:number;
}

export const Translate = (x:number, y:number) => brand('Translate',{ 
  x, 
  y, 
});

///

export interface Transform2d extends Readonly<{
  skew:Skew;
  scale:Scale;
  translate:Translate;
}>{}
