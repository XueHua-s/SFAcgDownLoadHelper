<script setup lang="ts">
import sfGril from '~/assets/sf-gril.jpg'
</script>

<template>
  <div data-root="true" class="w-480px">
    <n-result
      status="info"
      title="小萝还没有设置项哦!"
      description="好东西是需要慢慢等待的。"
    >
      <template #icon>
        <img class="w-120px" :src="sfGril" />
      </template>
    </n-result>
  </div>
</template>
