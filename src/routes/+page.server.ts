import Welcome from '$lib/server/pages/Welcome.svelte';
import {addPage} from 'partial-hydration-sk/server';

export async function load(){
    addPage(Welcome,"Welcome");
    
}