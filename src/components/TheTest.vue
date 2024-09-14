<script setup lang="ts">
import { ref } from 'vue'

const pIndex = ref(1)
const isOpen = ref(false)

function openViewer() {
  isOpen.value = true
}
</script>

<template>
  <div>
    <button class="text-7xl btn" @click="openViewer">
      뷰어 열기
    </button>
    <dialog v-if="isOpen" class="h-full bg-black modal" open>
      <img v-show="pIndex === 1" src="https://dcimg1.dcinside.com/viewimage.php?id=2eb2dd2fe6ed36a379ee&no=29bcc427bd8077a16fb3dab004c86b6f24b7e12241ba1d97df86ebc326b431b1d575f47ffe1a641706fbce169a0d8acfea2f66830080d0d5f0378732cbbd9b15" alt="">
      <img v-show="pIndex === 2" src="https://dcimg1.dcinside.com/viewimage.php?id=2eb2dd2fe6ed36a379ee&no=29bcc427bd8077a16fb3dab004c86b6f24b7e12241ba1d97df86ebc326b431b1d575f47ffe1a641706fbce169a0d8acfea2f668305828186ad33d732cbbd9b15" alt="">
      <img v-show="pIndex === 3" src="https://dcimg1.dcinside.com/viewimage.php?id=2eb2dd2fe6ed36a379ee&no=29bcc427bd8077a16fb3dab004c86b6f24b7e12241ba1d97df86ebc326b431b1d575f47ffe1a641706fbce169a0d8acfea2f66830381d4d5f0328937cbbd9b15" alt="">
      <button class="fixed text-2xl left-5" @click="() => pIndex += 1">
        >
      </button>
    </dialog>
  </div>
</template>
