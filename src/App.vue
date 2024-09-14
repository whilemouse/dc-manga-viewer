<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import logo from './assets/logo.png';
const logoUrl = chrome.runtime.getURL(logo);



console.log('App')
</script>

<template>
  <img alt="Vue logo" :src="logoUrl" />
</template>

<style>
#crx-root {
  position: fixed;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
}

#crx-root button {
  background-color: rgb(239, 239, 239);
  border-color: rgb(118, 118, 118);
  border-image: initial;
  border-style: outset;
  border-width: 2px;
  margin: 0;
  padding: 1px 6px;
}</style>
