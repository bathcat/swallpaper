<script lang='ts'>
  import { derived } from 'svelte/store';
  import{ getLocalContext } from './Group.svelte';
  import { Badge } from 'sveltestrap';
  import { fade } from 'svelte/transition';


  const {store} = getLocalContext();

  const moveCount=derived(
    store,
    g=>g.transformationLog.length,
  );


</script>

{#if $moveCount>0}
  <span
    transition:fade
  >
    <Badge 
      color='info'
    >
      {$moveCount}
    </Badge>
  </span>
{/if}