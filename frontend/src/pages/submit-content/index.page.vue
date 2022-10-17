<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="name"
        v-model="form.name"
      />
      <input
        type="email"
        placeholder="email"
        v-model="form.email"
      />
      <input
        type="text"
        placeholder="url"
        v-model="form.url"
      />
      <textarea v-model="form.description"></textarea>
      <button class="submit"></button>
    </form>
  </div>
  <p>{{ form.description }}</p>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  url: '',
  description: '',
});

console.log(form.description);
</script>
<script lang="ts">
export const documentProps = {
  title: 'Sumbit Content | Pentzero',
  description: 'Luxury lifestyle blog',
};
</script>

<style></style>
