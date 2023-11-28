import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router'; // Make sure the router file exists and is exported correctly

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .use(router) // Add this line to use the router
  .mount('#app');
