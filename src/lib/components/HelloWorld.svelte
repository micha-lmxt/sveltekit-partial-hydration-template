<script>
    import {onMount} from 'svelte'
    import { fade } from 'svelte/transition';
    export let name="nobody"
    let vis = true;
    onMount(()=>{
        name="world"
        vis=false;
    })
</script>

Hello {name}
<button class:vis on:click={()=>name = name + "!"} transition:fade>+</button>
<style>
   .vis{
        display:none;
    }
</style>