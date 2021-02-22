import type { Branded } from './branded';
import { brand,hasBrand } from './branded';


// Radians
type RadianKind = 'Radians';
const radianKind:RadianKind='Radians';

export interface Radians extends Branded<RadianKind>{
  value:number,
}

const isRadians=(instance:any):instance is Radians => 
  hasBrand(radianKind,instance);


// Degrees
type DegreeKind = 'Degrees';
const degreeKind:DegreeKind='Degrees';
export interface Degrees extends Branded<DegreeKind>{
  value:number,
}

const isDegrees=(instance:any):instance is Degrees => 
  hasBrand(degreeKind,instance);


// Rotation

export type Rotation = Radians | Degrees | number;

export function Radians(n:Rotation):Radians {
  if (isDegrees(n)) {
    return Radians(n.value * Math.PI / 180);
  }

  if (isRadians(n)) {
    return n;
  }

  return brand(radianKind,{value:n});
}

export function Degrees(n:Rotation):Degrees {
  if (isRadians(n)) {
    return Degrees(Math.round(n.value * 180 / Math.PI));
  }

  if (isDegrees(n)) {
    return n;
  }

  return brand(degreeKind,{value:n});
}
