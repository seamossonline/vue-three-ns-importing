<template>
  <div class="projects-section">
    <Showcase />
    <h2 class="ctitle">Some Seamoss Bullshit</h2>
    <!-- SEAMOSS: THREEJS INITIAL ATTEMPTS HERE THEN ADD AS A SEPARATE VUE-->
  </div>
</template>

<script>
import Showcase from "@/components/Showcase.vue";
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js'; //THREE
const loader = new GLTFLoader();

loader.load( '../World/components/objects/garage-colored.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
export default {
  components: {
    Showcase,
  },
};
</script>


<style lang="scss" scoped>
.ctitle {
  text-align: center;
  font-weight: bold;
}
</style>