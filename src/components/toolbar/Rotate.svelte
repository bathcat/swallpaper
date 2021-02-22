<script lang='ts'>
  import { getLocalContext } from "../Group.svelte";
  import { getCenter } from "../../group-utils";
  import { Degrees, Radians } from "../../models/rotation";
  import { Rotate } from "../../models/rotate";
  import { Button, CustomInput } from 'sveltestrap';


  export let degrees:number = 0;
  

  const {execute} = getLocalContext();
  const getOrigin=getCenter(document);

  const options = [
    { value: 0, label: "0°" },
    { value: 60, label: "60°" },
    { value: 90, label: "90°" },
    { value: 120, label: "120°" },
    { value: 180, label: "180°" },
  ];

  function doRotate(){
    const theta = Radians(Degrees(degrees));
    execute(Rotate(theta,getOrigin()));
  }

</script>

<div class='wp-rotator'>

  <Button 
    class="wp-button-transform"
    title={!!degrees && `Rotate ${degrees}°` || ''}
    on:click={doRotate}
    disabled={!degrees}
  >
    <span 
      class="material-icons"
    >
      rotate_right
    </span>
  </Button>

  <CustomInput type='select' bind:value='{degrees}'>
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}	
  </CustomInput>

</div>
  

