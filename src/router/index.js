import Index from '@/views/Index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
		},
	],
});

export default router;
