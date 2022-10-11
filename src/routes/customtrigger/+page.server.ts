import CustomTrigger from '$lib/server/pages/CustomTrigger.svelte';
import {addPage} from 'partial-hydration-sk';

export async function load(){

    addPage(CustomTrigger,"CustomTrigger");
    
}