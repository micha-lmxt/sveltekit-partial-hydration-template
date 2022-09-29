import ClientApp from './ClientApp.svelte'
import ServerApp from './ServerApp.svelte'
import {browser} from '$app/environment';

const App = browser ? 
    ClientApp :
//    (await import('./serverApp.js')).default;
    ServerApp;

export default App;
