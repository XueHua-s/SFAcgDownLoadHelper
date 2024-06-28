<script setup lang="ts">
import { NPopover } from 'naive-ui'
import SFGrilFloaDragButton from '~/components/SFGrilFloaDragButton.vue'
import DownLoadHelper from '~/contentScript/components/DownLoadHelper.vue'
</script>

<template>
  <div class="content">
    <NPopover placement="left-start" trigger="click">
      <template #trigger>
        <SFGrilFloaDragButton :size="60" />
      </template>
      <DownLoadHelper />
    </NPopover>
  </div>
</template>
<style lang="scss" scoped></style>
