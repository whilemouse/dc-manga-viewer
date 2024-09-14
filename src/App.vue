<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import logo from './assets/logo.png';
const logoUrl = chrome.runtime.getURL(logo);


console.log('App')
</script>

<template>
  <div class="my-extension ">
    <a href="b" class=" text-3xl">A23</a>
  </div>
  <img alt="Vue logo" :src="logoUrl" />
</template>

<style>

</style>
