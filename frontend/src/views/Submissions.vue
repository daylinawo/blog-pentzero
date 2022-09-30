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
      <input
        type="text"
        placeholder="url"
        v-model="url"
      />
      <textarea v-model="description"></textarea>
      <button class="submit"></button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
