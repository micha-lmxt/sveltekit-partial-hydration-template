<script>
import {tick} from 'svelte';
let name = "A";
tick().then(_=>name="B")
</script>
<div>{name}</div>