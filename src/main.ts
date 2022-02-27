import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { Quasar } from 'quasar'
import quasarConfig from './plugins/quasar'

const app = createApp(App)

app.use(Quasar, quasarConfig)
app.use(router).mount('#app')
