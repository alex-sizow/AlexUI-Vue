<script setup>
import { ref } from 'vue';

const links = ref([
	{
		name: 'Typography',
		href: '/typography',
	},
	{
		name: 'Button',
		href: '/button',
	},
]);
</script>

<template>
	<div class="sidebar">
		<router-link
			class="sidebar__link"
			v-for="(link, index) in links"
			:key="index"
			:to="link.href"
			>{{ link.name }}</router-link
		>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	left: 0;
	top: 62px;
	height: 100%;
	background: oklch(100% 0 274.3);
	position: fixed;
	width: 250px;
	padding: 20px;
	transition: 0.2s;
	box-shadow: 0px 0px 10px oklch(0% 0 274.3);
	transform: translateX(0px);
	.sidebar__link {
		display: block;
		border-radius: 12рх;
		padding: 10рх;
		border: 2рх soUd #fff;
		transition: 0.2s;
		font-weight: bold;
		margin-bottom: 10рх;
		&:hover {
			border-color: var(--primary-color);
		}
	}
}
</style>
