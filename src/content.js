import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const root = document.createElement('div')
root.id = 'crx-root'
document.body.prepend(root)

const app = createApp(App)
app.mount(root)
