<script>
import {onMount} from 'svelte';
export let onclick=()=>text += "!"
let color="black"
let text = "I am not hydrated"

onMount(()=>text = "Now I am hydrated")
</script>

<button on:click={onclick} style:color={color}>
{text}
</button>