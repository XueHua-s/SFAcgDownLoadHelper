<script setup lang="ts">
import { NPopover, useMessage } from 'naive-ui'
import { computed } from 'vue'
import SFGrilFloaDragButton from '~/components/SFGrilFloaDragButton.vue'
import DownLoadHelper from '~/contentScript/components/DownLoadHelper.vue'
import { sfHost, sfMHost } from '~/const/shifferHost'
const message = useMessage()
const isRender = computed(() => {
  if (location.host === sfHost) {
    return true
  } else if (location.host === sfMHost) {
    message.error('插件暂不支持在移动端进行下载')
  }
  return false
})
</script>

<template>
  <div v-if="isRender" class="content">
    <NPopover placement="left-start" trigger="click">
      <template #trigger>
        <SFGrilFloaDragButton :size="60" />
      </template>
      <DownLoadHelper />
    </NPopover>
  </div>
</template>
<style lang="scss" scoped></style>
