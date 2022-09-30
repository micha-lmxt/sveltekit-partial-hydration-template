<script>
import FancyH3 from '$lib/components/FancyH3.svelte';
import {Hydrate} from 'partial-hydration-sk';
</script>
<Hydrate component={FancyH3}><slot/></Hydrate>