import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

async function loadCrabs() {
    const loader = new GLTFLoader();
    
    const parrotData = await loader.loadAsync('./objects/garage-colored.glb');
    
    console.log('Squaaawk!', parrotData);
    }

export { loadCrabs };