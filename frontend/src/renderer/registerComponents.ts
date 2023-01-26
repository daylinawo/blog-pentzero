import { App } from 'vue';

import AppLink from './AppLink.vue';
import AppDate from '@/components/AppDate.vue';
import AppIcon from '@/components/AppIcon.vue';
import { ClientOnly } from '@/utils/clientOnly';

export const registerComponents = (app: App): void => {
  app.component('AppLink', AppLink);
  app.component('AppDate', AppDate);
  app.component('AppIcon', AppIcon);
  app.component('ClientOnly', ClientOnly);
};
