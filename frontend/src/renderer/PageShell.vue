<template>
  <TheHeader />
  <main class="content">
    <div class="main-container"><slot /></div>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  margin-inline: auto;
  margin-bottom: 6em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
