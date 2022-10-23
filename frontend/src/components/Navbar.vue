<template>
  <div class="navbar">
    <nav>
      <a
        href="/"
        class="logo-link"
        ><img src="../assets/images/logo.png"
      /></a>
      <div class="links">
        <Link href="/">Home</Link>
        <Link href="/submit-content">Submit Content</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div class="search"></div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import Link from '../renderer/Link.vue';
</script>

<style lang="scss">
.navbar {
  background: #000;
  padding: 0.625em;
  margin-bottom: 2rem;
  position: fixed;
  width: 100%;
  z-index: 1;

  nav {
    display: flex;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  nav .links {
    margin-left: auto;
  }

  nav .links a {
    margin-left: 1em;
    font-size: 1rem;
    color: var(--navLinkColor);
    font-weight: bold;
  }

  nav .search {
    margin-left: auto;
    cursor: pointer;
  }

  nav .links a:hover,
  nav .search:hover > .search-icon path {
    color: var(--primary);
  }

  nav .search-icon path {
    color: #fff;
  }

  .logo-link {
    line-height: 0%;
    img {
      max-width: 50px;
    }
  }
}
</style>
