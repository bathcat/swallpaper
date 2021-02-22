import { Transformation } from './operation';
import { Transform2d } from './transformation';

export interface GroupInfo{
  name:string;
  image:string;
  summaryMarkup:string;
}

export interface GroupState{
  id:string;
  info:GroupInfo;
  currentTransformation:Transform2d;
  transformationLog:Array<Transformation>;
}
