import {createWebHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import HelloWorld from './components/HelloWorld.vue';

const history = createWebHistory();

const routes = [
    {path: '/', component: Home},
    {path: '/year/:id', component: HelloWorld}
]

const router = createRouter({ history, routes});

export default router;

