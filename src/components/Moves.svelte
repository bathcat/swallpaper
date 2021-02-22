<script lang='ts'>
  import { getLocalContext } from './Group.svelte';
  import { Degrees} from '../models/rotation';
  import { fly } from 'svelte/transition';
  import Revert from './Moves.Revert.svelte';
  import { match } from '../models/operation';

  import { Table } from 'sveltestrap';

  const {store} = getLocalContext();

  const toType = match({
    mirror:_=>'Mirror',
    rotate:_=>'Rotate',
  });

  const toInfo = match({
    mirror:m=>`Axis: ${Degrees(m.axis).value}°`,
    rotate:r=>`${Degrees(r.theta).value}°`,
  });

</script>


<div class='wp-text-holder'>
  <Table hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Type</th>
        <th>Info</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each $store.transformationLog as vm,i}
      <tr in:fly="{{duration: 200,y: 500}}">
        <th scope='row'>{i+1}</th>
        <td>{toType(vm)}</td>
        <td>{toInfo(vm)}</td>
        <td>
          {#if i+1!== $store.transformationLog.length}
            <Revert></Revert>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </Table>
</div> 

<style>
  :global(tr:not(:hover) .wp-button-revert){
    opacity:.2;
    transition: .5s;
  }

  :global(tr:hover .wp-button-revert){
    opacity:1;
    transition: .5s;
  }

</style>