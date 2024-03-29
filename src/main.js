import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CKEditor from '@ckeditor/ckeditor5-vue'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(Antd)
app.use(router)
app.use(createPinia())
app.use(CKEditor)

app.mount('#app')
