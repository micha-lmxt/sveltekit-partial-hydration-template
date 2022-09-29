import BasicExample from '$lib/server/pages/Basicexample.svelte'
import {addPage} from '$lib/partialhydration/pages';

export async function load(){
    addPage({name:"BasicExample",page:BasicExample})
}