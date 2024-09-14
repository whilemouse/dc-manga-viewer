import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const root = document.createElement('div')
root.id = 'manga-viewer'

const content = document.querySelector('.gallview_contents')
if (content) {
  content.prepend(root)
}
else {
  document.body.prepend(root)
}

const app = createApp(App)
app.mount(root)
