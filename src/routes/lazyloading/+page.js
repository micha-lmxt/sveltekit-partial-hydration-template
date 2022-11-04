import { setDynamicComponents } from 'partial-hydration-sk/pages';
import Heart from '$lib/components/Heart.svelte';

export async function load(){
    setDynamicComponents([async()=>(await import('$lib/components/FancyH3.svelte')).default,
Heart])
}