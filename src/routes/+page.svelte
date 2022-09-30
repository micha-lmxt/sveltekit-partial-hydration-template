<script lang="ts">
    import {PartialApp} from 'partial-hydration-sk';
    import FancyH3 from '$lib/components/FancyH3.svelte';
    
</script>
<PartialApp tag="div" id="appstart" page="Welcome" starts={[FancyH3]}/>


