import { createApp } from 'vue'
import App from './App.vue'

const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

const app = createApp(App)
app.mount(root)
