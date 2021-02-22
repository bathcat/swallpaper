<script lang='ts'>
  import {  ButtonToolbar } from 'sveltestrap';
  import { Degrees, Radians } from '../../models/rotation';
  import Rotate from './Rotate.svelte';
  import Reset from './Reset.svelte';
  import Mirror from './Mirror.svelte';

</script>

<ButtonToolbar>
  <Rotate></Rotate>

  <Mirror 
    axis={Radians(Degrees(0))}
    title='Mirror vertical'
  >
  </Mirror>
  
  <Mirror 
    axis={Radians(Degrees(45))}
    title='Mirror 45'
    disabled={true}
  >
  </Mirror>

  <Mirror 
    axis={Radians(Degrees(90))}
    title='Mirror horizontal'
  >
  </Mirror>

  <Reset>
  </Reset>

</ButtonToolbar>



