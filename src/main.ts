import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 1. Importa el router (ajusta la ruta si tu archivo está en otra carpeta)
import router from './router' 

const app = createApp(App)

// 2. Dile a la aplicación que use el router
app.use(router)

// 3. Monta la aplicación
app.mount('#app')