import type { SvelteComponentTyped } from 'svelte';

/**
 * @type {typeof SvelteComponentTyped<{tag?:string,id:string,props?:object,starts?:SvelteComponent[],page:string},{},{}>}
 * The main entry for static code. Prop 'page' must be a string which is
 * associated with a Svelte component. This must be loaded in server 
 * side code, eg. in the load function in +page.server.js via the 
 * addPage functionality. 'starts' is an array of all Svelte components
 * which are are hydrated. They still need to be wrapped with either 
 * 'hydrate' function or 'Hydrate' coponenent. 
 */
export {default as PartialApp} from './partialApp';

export {default as Hydrate} from './Hydrate.svelte';
export {hydrate} from './hydrate'
export {addPage} from './pages';

// some helper components
/**
 * Portal like component. Slot content is hydrated into the prop 
 * 'element'
 */
export {default as Claim} from './claim'
/**
 * This is a client-side-only component. It hydrates a given tag and keeps all the 
 * children without handling them. If an id is provided, it infers the tag 
 * when hydrated. Slot is rendered into a disconnected dummy element.
 */
export {default as Take} from './take';
