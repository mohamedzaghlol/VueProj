import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import HelloWorld from './components/HelloWorld.vue'
import CreatePerson from './components/CreatePerson.vue'
import UpdatePerson from './components/UpdatePerson.vue'
import PersonDetails from './components/PersonDetails.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "HelloWorld", component: HelloWorld },
        { path: "/Create", name: "CreatePerson", component: CreatePerson },
        { path: "/UpdatePerson/:id", name: "UpdatePerson", component: UpdatePerson },
        { path: "/PersonDetails/:id", name: "PersonDetails", component: PersonDetails },
    ]
});
const app = createApp(App)
// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
app.use(router);
app.mount('#app')
