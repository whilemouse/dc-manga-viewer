<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ViewerIcon from '../assets/svg/ViewerIcon.vue'
import slash from '/src/assets/slash.png'

const pIndex = ref(0)
const isOpen = ref(false)
let imagesArray: HTMLImageElement[] = []
const recommendBtn: HTMLDivElement | null = document.querySelector('.btn_recommend_box')
const slashUrl = chrome.runtime.getURL(slash)

const hasViewerOptions = {
  galleryIds: ['comic', 'cartoon'], // 여기에 더 추가 가능
  greaterImageCount: 2,
}
const hasViewer = ref(false)

onMounted(() => {
  const writeDiv = document.querySelector('.write_div')
  const images = writeDiv!.querySelectorAll('img')
  imagesArray = Array.from(images)

  hasViewer.value = isAllowGallery() && greaterImageLength()
})

function isAllowGallery() {
  const urlParams = window.location.search

  const idMatch = urlParams.match(/id=([^&]*)/) // id 파라미터 추출
  if (!idMatch)
    return false // id가 없는 경우 false 반환

  const idValue = idMatch[1] // 추출된 id 값
  return hasViewerOptions.galleryIds.some(id => idValue.startsWith(id)) // 조건 배열과 비교
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
  onFullscreen()
  isOpen.value = true
  window.addEventListener('keydown', handleKeyDown)
}

function closeViewer() {
  offFullscreen()
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

function onFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  }
}

function offFullscreen() {
  if (document.exitFullscreen && document.fullscreenElement) {
    document.exitFullscreen()
  }
}

function handleWheel(event: WheelEvent) {
  if (event.deltaY > 0) {
    pageNext()
  }
  else {
    pagePrev()
  }
}
</script>

<template>
  <div>
    <button v-if="hasViewer" class="btn btn-active dark:bg-gray-300" @click="openViewer">
      <ViewerIcon />
    </button>

    <dialog v-if="isOpen" class="h-full bg-black modal" open @wheel="handleWheel">
      <div class="fixed left-0 w-1/2 h-full " @click="pagePrev" />
      <div class="fixed right-0 w-1/2 h-full " @click="pageNext" />
      <p class="fixed text-xl text-white left-5 top-5">
        {{ pIndex + 1 }} / {{ imagesArray.length }}
      </p>
      <button class="fixed top-0 p-5 text-2xl text-white right-5 " @click="closeViewer">
        X
      </button>
      <div v-show="pIndex === imagesArray.length - 1" data-theme="dark" class="fixed w-72 right-2 bottom-2 modal-box" @click="moveToRecommendBtn">
        <h3 class="text-2xl font-bold text-[#CCCCCC]">
          마지막 페이지입니다
        </h3>
        <btn class="mt-4 text-lg btn btn-info btn-outline">
          댓글로 이동
          <img class="w-8 h-8" :src="slashUrl" alt="">
        </btn>
      </div>
      <img v-for="(image, index) in imagesArray" v-show="pIndex === index" :key="index" class="max-h-screen" :src="image.src" alt="">
    </dialog>
  </div>
</template>
