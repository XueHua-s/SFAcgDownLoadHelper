<template>
  <div data-root="true" class="root">
    <n-config-provider :locale="zhCN">
      <n-loading-bar-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <n-message-provider>
              <content />
            </n-message-provider>
          </n-notification-provider>
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import {
  NConfigProvider,
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  zhCN
} from 'naive-ui'
import Content from './Content.vue'
</script>
<style scoped>
.root {
  position: fixed;
  top: 68px;
  right: 36px;
  z-index: 1000;
}
</style>
