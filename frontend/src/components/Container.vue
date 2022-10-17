<template>
  <div class="container"><slot /></div>
</template>

<script></script>
<style scoped>
.container {
  width: min(100% - 40px, var(--max-width));
  margin: auto;
}
</style>
