<script lang="ts">
    import {PartialApp} from 'partial-hydration-sk';
    import C from '$lib/components/HelloWorld.svelte'
</script>
<PartialApp tag="div" id="appstart" page="BasicExample" starts={[C]}/>

