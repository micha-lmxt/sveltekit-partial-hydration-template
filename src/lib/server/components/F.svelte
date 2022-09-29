<script>
import FancyH3 from '$lib/components/FancyH3.svelte';
import Hydrate from '$lib/partialhydration/Hydrate.svelte';
</script>
<Hydrate component={FancyH3}><slot/></Hydrate>