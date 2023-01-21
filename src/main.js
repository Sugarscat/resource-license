import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./utils/i18n";
import Cookies from "js-cookie";

import './assets/main.css'

const app = createApp(App)

app.use(i18n)
app.use(Cookies)
app.mount('#app')