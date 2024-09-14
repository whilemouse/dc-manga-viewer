<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const pIndex = ref(0)
const isOpen = ref(false)
let imagesArray: HTMLImageElement[] = []

onMounted(() => {
  const writeDiv = document.querySelector('.write_div')
  const images = writeDiv!.querySelectorAll('img')
  imagesArray = Array.from(images)
})

onUnmounted(() => {
})

// 키보드 이벤트 핸들러 함수
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
    pageNext()
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
    pagePrev()
  }
  if (event.key === 'Escape') {
    closeViewer()
  }
}

function openViewer() {
  isOpen.value = true
  window.addEventListener('keydown', handleKeyDown)
}

function closeViewer() {
  isOpen.value = false
  window.removeEventListener('keydown', handleKeyDown)
}

function pagePrev() {
  if (pIndex.value === 0)
    return
  pIndex.value -= 1
}

function pageNext() {
  if (pIndex.value === imagesArray.length - 1)
    return
  pIndex.value += 1
}
</script>

<template>
  <div>
    <button class="btn btn-secondary" @click="openViewer">
      뷰어 열기
    </button>

    <dialog v-if="isOpen" class="h-full bg-black modal" open>
      <div class="fixed left-0 w-1/2 h-full " @click="pagePrev" />
      <div class="fixed right-0 w-1/2 h-full " @click="pageNext" />
      <img v-for="(image, index) in imagesArray" v-show="pIndex === index" :key="index" class="h-full " :src="image.src" alt="">
      <p class="fixed text-xl right-5 bottom-5">
        {{ pIndex + 1 }} / {{ imagesArray.length }}
      </p>
      <!-- <button class="fixed top-0 text-2xl left-1/2" @click="closeViewer">
        X
      </button> -->
    </dialog>
  </div>
</template>
