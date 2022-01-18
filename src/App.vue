<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue'
import HelloWorld from 'comps/HelloWorld.vue'
import Comp from 'comps/Comp.vue'

const hw = ref(null)

const onmyclick = () => {
  console.log('myclick from helloworld')

  hw.value.someMethod()
}
</script>

<template>
  "vite": "^2.7.2"

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + Vite" ref="hw" @myclick="onmyclick" />

  <Comp></Comp>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
