export interface Branded<Tkind extends string> {
  readonly _kindBrand: Tkind;
}

export function brand<Tkind extends string, Tvanilla extends object>(kind:Tkind,value:Tvanilla):Tvanilla&Branded<Tkind>{
  return {
    _kindBrand:kind,
    ...value,
  }
}

export function hasBrand<Tkind extends string>(kind:Tkind,instance:any):instance is Branded<Tkind>{
  return instance._kindBrand === kind;
}

export const brandGuard=<Tkind extends string>(kind:Tkind) =>(instance:any):instance is Branded<Tkind>=>{
  return instance._kindBrand === kind;
}


