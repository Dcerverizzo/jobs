import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const icons = {
  defaultSet: "mdi",
  aliases,
  sets: {
    mdi,
  },
};

const vuetify = createVuetify({
  icons,
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
