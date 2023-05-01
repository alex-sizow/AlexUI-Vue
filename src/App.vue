<script setup>
import LayoutHeader from '@/components/layout/Header.vue';
import LayoutSidebar from '@/components/layout/Sidebar.vue';
</script>

<template>
	<div class="container">
		<layout-header />
		<layout-sidebar />
		<div class="content"><router-view /></div>
	</div>
</template>

<style lang="scss">
@import './styles/global.scss';

.content {
	max-width: 1400px;
	padding: 30px;
	margin-left: 250px;
	transition: 0.2s;
}
</style>
