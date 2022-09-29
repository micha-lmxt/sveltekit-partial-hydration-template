<script context="module">
  import {hydrate} from '$lib/partialhydration/hydrate';
  import  h3  from './F.svelte';
  import fancyh3 from '$lib/components/FancyH3.svelte';
  
  const h4 = hydrate(fancyh3);
  export { h3, h4 };
</script>
<slot/>