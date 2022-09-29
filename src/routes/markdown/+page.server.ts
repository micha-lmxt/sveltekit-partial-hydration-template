import Md from '$lib/server/pages/Markdown.svx';
import {addPage} from '$lib/partialhydration/pages';

export async function load(){

    //let text = readFileSync("./src/routes/markdown/markdown.md",{encoding:"utf-8"});
    
    addPage(Md,"Markdown");
    
}