import { toTransform } from './commands';
import { Command,isGroupCommand, Transformation } from './models/operation';
import {  GroupState } from './models/group';
import {Readable,writable, Writable} from 'svelte/store';
import { Reset } from './models/reset';

export interface AppState{
  summaryMarkup:string;
  readonly groups:ReadonlyArray<GroupState>;
}

export interface Context<T>{
  readonly store:Readable<T>;
  readonly execute:(c:Command)=>void;
}

export function newAppContext():Context<AppState>&{writeStore:Writable<AppState>}{
  const writeStore = writable<AppState>({groups:[],summaryMarkup:''});

  function execute(c: Command){
    if (!isGroupCommand(c)){
      throw new Error('Only group commands allowed');
    }
    writeStore.update(current=>{
      const group = current.groups.filter(g=>g.id===c.groupID)[0];
      const delta = toTransform(group.currentTransformation, c);
      group.currentTransformation=delta;

      if(Reset.isInstance(c)){
        group.transformationLog=[];
      }
      else{
        //TODO: Get the typing right.
        group.transformationLog = group.transformationLog.concat([c as unknown as Transformation]);
      }

      return current;
    });
  };

  return{writeStore,execute,store:writeStore,}
}
