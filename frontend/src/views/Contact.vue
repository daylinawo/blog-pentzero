<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="name"
        v-model="name"
      />
      <input
        type="email"
        placeholder="email"
        v-model="email"
      />
      <textarea v-model="message"></textarea>
      <button class="submit"></button>
    </form>
  </div>
</template>

<script setup></script>

<style></style>
