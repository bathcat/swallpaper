import { map, single } from 'rxjs/operators';
import { AppDTO, Database } from './database';
import { T2D } from './math/transform-2d';
import { GroupInfo, GroupState } from './models/group';
import { AppState, Context, newAppContext } from './context';

const toGroupState = (info:GroupInfo):GroupState=>
  ({
    currentTransformation:T2D.Get.identity,
    id:info.name,
    transformationLog:[],
    info
  });


const toAppState = (dto:AppDTO):AppState=>
  ({
    summaryMarkup:dto.summaryMarkup,
    groups:dto.groups.map(toGroupState),
  });

export function initAppContext(db:Database = new Database()):Context<AppState>{

  const context= newAppContext();

  db.app$
    .pipe(
      map(toAppState),
      single(),
    )
    .subscribe(context.writeStore.set);

  return context;
}


