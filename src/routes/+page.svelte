<script lang="ts">
import {page} from '$app/stores'
</script>
<h1>Welcome to SvelteKit Partial Hydration Template</h1>
<nav>
    <ul>
    <li><a href="/basicexample">Basic Example</a></li>
    <li><a href="/markdown">Markdown Example</a></li>
    </ul>
</nav>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{JSON.stringify($page)}