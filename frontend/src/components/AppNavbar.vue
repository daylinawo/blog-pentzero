<template>
  <header :class="$style.navbar">
    <nav>
      <a
        href="/"
        :class="$style.logo"
        ><img src="../assets/images/logo.png"
      /></a>
      <div :class="$style.links">
        <AppLink href="/">Home</AppLink>
        <AppLink href="/submit-content">Submit Content</AppLink>
        <AppLink href="/contact">Contact</AppLink>
      </div>
      <div class="search"></div>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" module>
.navbar {
  background: #000;
  padding-block: 0.625em;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;

  nav {
    display: flex;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
  }
}

.search {
  margin-left: auto;
  cursor: pointer;
}

.search-icon path {
  color: #fff;
}

.links {
  margin: auto;
  :not(:first-child) {
    margin-left: 1.75em;
  }

  a {
    font-size: var(--fs-300);
    color: var(--white);
    font-weight: 600;
    text-transform: uppercase;
  }
}

.logo {
  line-height: 0%;
  img {
    max-width: 50px;
  }
}
</style>
