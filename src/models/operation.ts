import { Rotate } from './rotate';
import { Mirror } from './mirror';
import { Reset } from './reset';
  

export type Operation = Rotate | Mirror | Reset;
export type Transformation = Mirror | Rotate;

//TODO: Get rid of Command in favor of GroupCommand
export type Command = Mirror | Rotate | Reset;


export type GroupCommand = Operation &{
  readonly groupID:string;
}

export function isGroupCommand(cmd: Command): cmd is GroupCommand {
  return !!(cmd as GroupCommand).groupID;
}

function missingMatch(_:unknown):never{
  throw new Error('Missing match case');
}

type MatchArgs<T> = Partial<{
  mirror:(m:Mirror)=>T,
  rotate:(r:Rotate)=>T,
  reset:(r:Reset)=>T,
  fallback:(c:Command)=>T,
}>;

// This is a low-budget pattern matching idiom.
// Saves callers from having to do their own type testing.
export const match=<T>({
  mirror=missingMatch,
  rotate=missingMatch,
  reset=missingMatch,
  fallback=missingMatch,
}:MatchArgs<T>)=>(cmd:Command)=>{

  if(Mirror.isInstance(cmd)){
    return mirror(cmd);
  }

  if(Rotate.isInstance(cmd)){
    return rotate(cmd);
  }

  if(Reset.isInstance(cmd)){
    return reset(cmd);
  }

  return fallback(cmd);
}

  