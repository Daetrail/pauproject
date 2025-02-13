import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';


import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(PrimeVue, {
	theme: {
		preset: Lara
	}
});
app.use(createPinia())
app.use(router)
app.use(ToastService);

app.mount('#app')
