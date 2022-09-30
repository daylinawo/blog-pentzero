import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Submissions from '../views/Submissions.vue';
import Article from '../views/Article.vue';
import Video from '../views/Video.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/videos/1',
  },
  {
    path: '/videos/:page',
    name: 'Videos',
    component: Home,
  },
  {
    path: '/articles/:page',
    name: 'Articles',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/submissions',
    name: 'Submissions',
    component: Submissions,
    props: true,
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
  },
  {
    path: '/video/:id',
    name: 'Video',
    component: Video,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
