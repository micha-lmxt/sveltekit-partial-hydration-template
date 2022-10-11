<script lang="ts">
    import {PartialApp} from 'partial-hydration-sk';
    let hydrated;
    let triggerButtonProps;
    $: if(hydrated){
        hydrated.forEach(e => {
            if (e.key === "click"){
                e.element.onclick=e.trigger
            }
            if (e.key === "enter"){
                e.element.onmouseenter=e.trigger
            }
            if (e.key === "trigger"){
                // get the store to the pros
                triggerButtonProps = e.props;
            }
            if (e.key === "button"){
                // pass the trigger function as prop
                triggerButtonProps.set({onclick:e.trigger})
            }
        });
    }
    
</script>
<PartialApp tag="div" id="appstart" page="CustomTrigger" bind:hydrated/>


