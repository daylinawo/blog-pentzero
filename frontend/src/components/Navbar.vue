<template>
  <div class="navbar">
    <nav>
      <router-link
        :to="{ name: 'Home' }"
        class="logo-link"
        ><img src="../assets/images/logo.png"
      /></router-link>
      <div class="links">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Submissions' }">Submit Content</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </div>
      <div class="search">
        <fas
          class="search-icon"
          :icon="['fas', 'search']"
        />
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  background: #000;
  padding: 0.625em;
  margin-bottom: 2rem;

  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  nav .links {
    margin-left: auto;
  }

  nav .links a {
    margin-left: 1em;
    font-size: 1rem;
    color: #fff;
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
