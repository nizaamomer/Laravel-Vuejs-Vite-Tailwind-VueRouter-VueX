// import './bootstrap';

import { createApp } from "vue";
import store from "./store"; 
import router from "./routes"; 
import axios from "axios";
import App from "./App.vue";
const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$axios = {...axios}
app.mount("#app");
