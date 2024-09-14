<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import logo from './assets/logo.png'
import TheTest from './components/TheTest.vue'

const logoUrl = chrome.runtime.getURL(logo)
</script>

<template>
  <div class="my-extension ">
    <a href="b" class="">21A23</a>
    <button class="btn btn-secondary">
      Button
    </button>
    <TheTest />
  </div>
  <img alt="Vue logo" :src="logoUrl">
</template>

<style>

</style>
