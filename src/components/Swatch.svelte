<script lang='ts'>
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { getLocalContext } from './Group.svelte';
  import { T2D } from '../math/transform-2d';

  const {store} = getLocalContext();
  const toCss = T2D.Form.toCssTransform;

  const fadeParams = {duration: 250};

  const src = $store.info.image;
  const alt = derived(store,g=>`Image for group ${g.info.name}.`);
  const isDirty = derived(store,g=>g.transformationLog.length!==0);

  let clicking = false;

</script>


<div 
  class='wp-swatch-content'
  on:mousedown="{()=>clicking=true}"
  on:mouseup="{()=>clicking=false}"
  on:mouseleave="{()=>clicking=false}"
  class:wp-is-dirty={$isDirty}
>
  <img
    id='wp-swatch-transformed'
    {src}
    alt={$alt}
    draggable='false'
    style={toCss($store.currentTransformation)}
  >

  {#if (clicking && $isDirty)}

    <img 
      id='wp-swatch-original'
      transition:fade={fadeParams}
      {src}
      alt={$alt}
      draggable='false'
    >
    <div 
      transition:fade={fadeParams}
      class="wp-swatch-preview-label"
    >
      Original
    </div>

  {/if}

</div>
  

<style type="text/scss">
  #wp-swatch-original{
    filter: grayscale(25%) contrast(85%) brightness(115%);
    cursor: pointer;
  }

  .wp-swatch-preview-label{
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(5%, -50%);
    padding:1rem 2rem 1rem 2rem;
    border-radius: .5rem;
    background-image: radial-gradient(
      rgba(255,255,255,.25) 60%, 
      rgba(255,255,255,.05) ,
      rgba(255,255,255,0) ,
    );
  }


  @keyframes newly-dirty {
    0%   {}
    50%  {
      filter:drop-shadow(.5rem .5rem 1rem);
    }
    100% {}
  }

  .wp-swatch-content{
    cursor: not-allowed;
    &.wp-is-dirty{
      cursor: pointer;
      animation-name: newly-dirty;
      animation-duration: .5s;
    }
  }

  #wp-swatch-transformed{
    position:absolute;
  }

</style>
