import type {Branded} from './branded';
import {brand,hasBrand} from './branded';

type Kind = 'Reset';
const kind:Kind='Reset';

export interface Reset extends Branded<Kind>{}

export const Reset = () => 
  brand(kind,{});

Reset.isInstance=(value: unknown): value is Reset =>
  hasBrand(kind,value);

