<script setup lang="ts">
import ViewerIcon from './assets/svg/ViewerIcon.vue'
</script>

<template>
  <div class="my-extension">
    <div class="w-40">
      <h1 class="text-2xl">
        만갤 뷰어
      </h1>
      <div>
        <div class="mt-1">
          <p class="flex items-center ">
            뷰어: <ViewerIcon class="w-5" />
          </p>
          <p>종료: ESC </p>
          <p>다음 페이지: →↓ </p>
          <p>이전 페이지: ←↑  </p>
          <p>댓글로 이동: /  </p>
        </div>
      </div>
    </div>
  </div>
</template>
