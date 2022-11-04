import Md from '$lib/server/pages/Lazy.svx';
import {addPage} from 'partial-hydration-sk/server';

export async function load(){

    addPage(Md,"Markdown");
    
}