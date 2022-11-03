<script lang="ts">
    import {Hydrate} from 'partial-hydration-sk';
    import C from '$lib/components/HelloWorld.svelte';
    
</script>
<main>
    <section>
    <h3>Static code</h3>
    <p>Here is some static code, which does not need hydration.</p>
    <p>It comes from a Svelte component 'Basicexample.svelte' which is imported into 'routes/basicexample/+page.server.js' and registered in the 'load' function via 'addPage'</p>
    <p>That just means that a name "BasicExample" for this component is provided as a string.</p>
    <p>The string "BasicExample" is then in turn entered as prop "page" in 'routes/basicexample/+page.svelte' for the component 'PartialApp'</p>
    <p>Note that only the server imported the component, so it can even be stored in '$lib/server' and its subfolders.</p>
    </section>
    <section>
    <h3>Dynamic (hydratable) code</h3>
    <p>Here is some static code, which does not need hydration.</p>
    <p>It comes from a Svelte component 'HelloWorld.svelte' which is imported into both 'Basicexample.svelte' and '/routes/basicexample/+page.svelte'.</p>
    <p>In 'BasicExample.svelte' it is passed as 'component' prop into the 'Hydrate' component. Props can also be passed down here, but make sure, they are serializable with JSON.stringify (eg. no functions)</p>
    <p>In 'routes/basicexample/+page.svelte' the component is passed to the 'starts' prop. This prop accepts an array of svelte components. All components, which should be hydrated by a 'Hydrate' component should be registered there.</p>
    <p>Note that the button in the 'HelloWorld.svelte' component uses fade in and out animation. </p>
    <Hydrate component={C} tag="div" />
    </section>
</main>
<style>
h3{
    text-decoration:underline;
}
</style>