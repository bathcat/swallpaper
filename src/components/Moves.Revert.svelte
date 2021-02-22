<script lang='ts'>
  import { Button } from 'sveltestrap';

  function revert(){
    throw new Error('Not implemented');
  }

</script>

<Button 
  class="wp-button-revert"
  title='Revert'
  on:click={()=>revert()}
  {...$$restProps}
  size='sm'
>
  <span 
    class="material-icons"
  >
    settings_backup_restore
  </span>
</Button>


