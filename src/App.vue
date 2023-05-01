<script setup>
import { ref } from 'vue';

import LayoutHeader from '@/components/layout/Header.vue';
import LayoutSidebar from '@/components/layout/Sidebar.vue';

const isOpenMenu = ref(false);

const toggleMenu = () => {
	isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
	<div class="container">
		<div
			class="sidebar-toggle"
			@click="toggleMenu">
			▶️
		</div>
		<layout-header />
		<layout-sidebar :openSidebar="isOpenMenu" />
		<div :class="['content', { content__full: !isOpenMenu }]">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
@import './styles/global.scss';

.content {
	max-width: 1400px;
	padding: 30px;
	margin-left: 250px;
	transition: 0.2s;
	&__full {
		margin-left: 0px;
	}
}

@media screen and (max-width: 1023px) {
	.content {
		margin-left: 0;
	}
}

.sidebar-toggle {
	position: fixed;
	left: 0;
	width: 15px;
	background: var(--primary-color);
	height: 100%;
	top: 62px;
	z-index: 1;
	cursor: pointer;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
