<script lang='ts'>
  import { derived } from 'svelte/store';
  import { Reset } from '../../models/reset';
  import{ getLocalContext } from '../Group.svelte';
  import { Button } from 'sveltestrap';


  const {execute,store} = getLocalContext();

  function reset(){
    execute(Reset());
  }

  const disabled=derived(
    store,
    g=>g.transformationLog.length===0,
  );


</script>



<Button 
  class="wp-button-transform"
  title='Reset'
  on:click={()=>reset()}
  disabled={$disabled}
>
  <span 
    class="material-icons"
  >
    delete_forever
  </span>
</Button>


