<script>
import MyButton from '$lib/components/MyButton.svelte';
import {Hydrate} from 'partial-hydration-sk';

</script>
<h3>Custom Trigger</h3>

<p>You can define what triggers the hydration</p>

<p>This button is not hydrated</p>
<MyButton/>

<p>This button is triggered on click</p>

<Hydrate component={MyButton} key="click" trigger="custom"/>

<p>This button is triggered on mouseenter</p>

<Hydrate component={MyButton} key="enter" trigger="custom"/>

<p>The left button is tiggered on view, the right one is hydrated, when the left is clicked</p>

<div style:display="flex">
<Hydrate component={MyButton} key="trigger"/>
<Hydrate component={MyButton} key="button" trigger="custom"/>
</div>