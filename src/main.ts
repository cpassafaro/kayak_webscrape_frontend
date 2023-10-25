/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios'
import { Model } from 'vue-api-query'

// inject global axios instance as http client to Model
Model.$http = axios

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })

registerPlugins(app)

createApp(App).use(vuetify).mount('#app')
