<script context="module" lang='ts'>
  import { derived } from 'svelte/store';
  import { getContext, setContext } from 'svelte';
  import type { Context, AppState } from '../context';
  import type { GroupState } from '../models/group';
  import { getAppContext } from './App.svelte';
  import type { Command, GroupCommand } from '../models/operation';

  const localContextKey = Symbol('Tab context key');
  export const getLocalContext=()=>getContext(localContextKey) as Context<GroupState>;

  export function getGroupContext(globalContext:Context<AppState>,groupID:string):Context<GroupState>{
    const store = derived(
      globalContext.store, 
      ac=>ac.groups.filter(g=>g.id===groupID)[0]
    );

    const execute = (c:Command)=>{
      const gc:GroupCommand ={
        ...c,
        groupID
      }; 
      globalContext.execute(gc);
    }

    return {store,execute};
  }

</script>

<script lang='ts'>
  import Toolbar from './toolbar/Toolbar.svelte';
  import Swatch from './Swatch.svelte';
  import TransformationList from './Moves.svelte';

  import MoveCountBadge from './MoveCountBadge.svelte';

  import {
    Card,
    CardBody,
    CardHeader,
    CardTitle
  } from 'sveltestrap';

  import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
  } from 'sveltestrap';


  export let groupID:string='';
  const appContext = getAppContext();
  const groupContext = getGroupContext(appContext,groupID);
  setContext(localContextKey,groupContext);

  const {store} = groupContext;


  let activeTab='0';

</script>


<Card class='mb-3 wp-card'>
  <CardHeader>
    <CardTitle>
      <h1 class="display-4">{$store.info.name}</h1>
    </CardTitle>
  </CardHeader>
  <CardBody>

    <div class="wp-group">

      <div class='wp-swatch'>
        <Toolbar></Toolbar>
        <Swatch></Swatch>
      </div>
    
      <div class='wp-group-details'>
        <Nav tabs>
          <NavItem>
            <NavLink active = {activeTab==='0'} href='#' on:click='{()=>activeTab='0'}'>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  active = {activeTab==='1'} href='#' on:click='{()=>activeTab='1'}'>
              Moves <MoveCountBadge></MoveCountBadge>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent {activeTab}>
          <TabPane tabId='0'>{@html $store.info.summaryMarkup}</TabPane>
          <TabPane tabId='1'>
            <TransformationList></TransformationList>
          </TabPane>
        </TabContent>

      </div>
    
    </div> 


  </CardBody>
</Card>



