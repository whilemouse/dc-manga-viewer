<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import slash from '../assets/slash.png'
import ViewerIcon from '../assets/svg/ViewerIcon.vue'

const pIndex = ref(0)
const isOpen = ref(false)
let imagesArray: HTMLImageElement[] = []
const recommendBtn: HTMLDivElement | null = document.querySelector('.btn_recommend_box')
const slashUrl = chrome.runtime.getURL(slash)

const hasViewerOptions = {
  regex: /id=comic\w*/,
  greaterImageCount: 4,
}
const hasViewer = ref(false)

onMounted(() => {
  const writeDiv = document.querySelector('.write_div')
  const images = writeDiv!.querySelectorAll('img')
  imagesArray = Array.from(images)

  hasViewer.value = isComicGallery() && greaterImageLength()
})

function isComicGallery() {
  const urlParams = window.location.search
  const matches = urlParams.match(hasViewerOptions.regex)

  return !!matches
}

function greaterImageLength() {
  return imagesArray.length > hasViewerOptions.greaterImageCount
}

onUnmounted(() => {
})

// 키보드 이벤트 핸들러 함수
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    pageNext()
  }
  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    pagePrev()
  }
  if (event.key === 'Escape') {
    closeViewer()
  }
  if (event.key === '/') {
    moveToRecommendBtn()
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

function moveToRecommendBtn() {
  closeViewer()
  if (recommendBtn) {
    recommendBtn.scrollIntoView()
  }
}
</script>

<template>
  <div>
    <button v-if="hasViewer" class="btn btn-active" @click="openViewer">
      <ViewerIcon />
    </button>

    <dialog v-if="isOpen" class="h-full bg-black modal" open>
      <div class="fixed left-0 w-1/2 h-full " @click="pagePrev" />
      <div class="fixed right-0 w-1/2 h-full " @click="pageNext" />
      <p class="fixed text-xl left-5 top-5">
        {{ pIndex + 1 }} / {{ imagesArray.length }}
      </p>
      <button class="fixed top-0 right-0 p-5 text-2xl" @click="closeViewer">
        X
      </button>
      <div v-show="pIndex === imagesArray.length - 1" class="fixed w-72 right-2 bottom-2 modal-box" @click="moveToRecommendBtn">
        <h3 class="text-2xl font-bold">
          마지막 페이지입니다
        </h3>
        <btn class="mt-4 text-lg btn btn-info btn-outline">
          댓글로 이동
          <img class="w-8" :src="slashUrl" alt="">
        </btn>
      </div>
      <img v-for="(image, index) in imagesArray" v-show="pIndex === index" :key="index" class="h-full " :src="image.src" alt="">
    </dialog>
  </div>
</template>
