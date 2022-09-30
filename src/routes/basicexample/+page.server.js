import BasicExample from '$lib/server/pages/Basicexample.svelte'
import {addPage} from 'partial-hydration-sk';

export async function load(){
    addPage({name:"BasicExample",page:BasicExample})
}