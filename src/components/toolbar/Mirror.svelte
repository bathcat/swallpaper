<script lang='ts'>
  import{ getLocalContext } from '../Group.svelte';
  import { getCenter } from '../../group-utils';
  import { Radians } from '../../models/rotation';
  import { Mirror } from '../../models/mirror';
  import { Button } from 'sveltestrap';
  
  export let axis:Radians=Radians(0);
  export let title='';
  export let disabled=false;

  const {execute} = getLocalContext();

  const getOrigin=getCenter(document);

  function doMirror(){
    execute(Mirror(axis,getOrigin()));
  }

  const style = `transform:rotate(${axis.value-Math.PI*.5}rad);`;

</script>

<Button 
  class="wp-button-transform"
  {title}
  {disabled}
  on:click={doMirror}
>
  <span 
    class="material-icons"
    {style}
  >
    switch_left
  </span>
</Button> 


