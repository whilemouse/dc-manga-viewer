<script setup lang="ts">
import MouseScroll from './assets/svg/MouseScroll.vue'
import ViewerIcon from './assets/svg/ViewerIcon.vue'
</script>

<template>
  <div class="my-extension">
    <div class="w-40" data-theme="dark">
      <h1 class="text-3xl">
        만갤 뷰어
      </h1>
      <div>
        <div class="mt-1 text-sm">
          <p class="flex items-center ">
            뷰어: <ViewerIcon class="w-5" />
          </p>
          <p>종료: ESC </p>
          <p class="flex items-center">
            다음 페이지: → ↓ <MouseScroll class="w-4 h-4" />
          </p>
          <p class="flex items-center">
            이전 페이지: ←↑<MouseScroll class="w-4 h-4 " />
          </p>
          <p>댓글로 이동: /  </p>
        </div>
      </div>
    </div>
  </div>
</template>
