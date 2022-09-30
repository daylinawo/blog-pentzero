import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './vue-apollo';
import { createApp, h, provide } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).component('fas', FontAwesomeIcon).mount('#app');
