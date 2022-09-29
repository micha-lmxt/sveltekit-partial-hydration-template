<script>
    import { fly } from 'svelte/transition';
</script>
<h3 transition:fly={{ y: 200, duration: 2000 }}><slot/></h3>
<style>
    h3{
        color:red;
        border-bottom:2px dotted red;
    }
</style>