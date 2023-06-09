import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faAddressBook,
	faCreditCard,
	faHand,
	faHeart,
	faHourglass,
	faLemon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add([
	faHeart,
	faHand,
	faAddressBook,
	faCreditCard,
	faLemon,
	faHourglass,
]);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.mount('#app');
