import { App } from 'vue';

import Link from './Link.vue';
import AppDate from '@/components/AppDate.vue';
import { ClientOnly } from '@/components/ClientOnly';

export const registerComponents = (app: App): void => {
  app.component('Link', Link);
  app.component('AppDate', AppDate);
  app.component('ClientOnly', ClientOnly);
};
