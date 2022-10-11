import { setDynamicComponents } from 'partial-hydration-sk/pages';

export async function load(){
    setDynamicComponents([async()=>(await import('$lib/components/FancyH3.svelte')).default])

}