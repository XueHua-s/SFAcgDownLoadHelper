<template>
  <div
    :style="{
      width: props.size + 'px',
      height: props.size + 'px'
    }"
    class="sf-gril-drag-button"
  >
    <img
      :style="{
        width: props.size + 'px',
        height: props.size + 'px'
      }"
      src="http://rs.sfacg.com/web/novel/images/images/emotion/SFGirl/002.png"
      alt=""
    />
  </div>
</template>
<script setup>
const props = defineProps({
  size: {
    default: 80,
    type: Number
  }
})
// const sfGrilUrl = chrome.runtime.getURL('/assets/sf-gril.jpg')
</script>
<style lang="scss" scoped>
.sf-gril-drag-button {
  cursor: pointer;
  position: fixed;
  background-color: #fff;
  z-index: 8000;
  top: 20px;
  right: 48px;
  border: 3px solid #e29464;
  overflow: hidden;
  border-radius: 50%;
}
</style>
