<script setup lang="ts">
import { getCache } from './utils'
const cache = ref<string>('')
const dialog = useDialog()
const handleOpen = async () => {
  const data = await getCache('key1')
  cache.value = data.result
  dialog.warning({
    title: '这是插件弹窗',
    content: `This is a test message for ContentScript - ${cache.value}`
  })
}
</script>

<template>
  <div>
    <n-button type="primary" @click="handleOpen">Open</n-button>
  </div>
</template>
