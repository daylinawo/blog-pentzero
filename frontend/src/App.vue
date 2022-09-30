<template>
  <TheHeader />
  <main class="content">
    <div class="main-container">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="route.path"
          ></component>
        </transition>
      </router-view>
    </div>
  </main>
  <TheFooter />
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  width: min(100% - 40px, 1200px);
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
