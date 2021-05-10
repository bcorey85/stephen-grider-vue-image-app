import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import AuthHandler from './Components/AuthHandler';
import ImageList from './Components/ImageList';
import UploadForm from './Components/UploadForm';
import store from './store';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/oauth2/callback', component: AuthHandler },
		{ path: '/', component: ImageList },
		{ path: '/upload', component: UploadForm }
	]
});

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');
