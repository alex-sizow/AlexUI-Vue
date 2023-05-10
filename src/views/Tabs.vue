<script setup>
import { ref } from 'vue';

import Tabs from '@/components/Tabs.vue';

const tabs = [
	{ name: 'About', label: 'About project' },
	{ name: 'Vue', label: 'About Vue' },
	{ name: 'Svelte', label: 'About Svelte' },
	{ name: 'React', label: 'About React' },
];
const selectedTab = ref('Vue');

const changeTab = (tabName) => {
	selectedTab.value = tabName;
};
</script>

<template>
	<h1 class="header-1">Tabs</h1>
	<Tabs
		:names="tabs"
		:selectedTab="selectedTab"
		@changeTab="changeTab"
		><div v-if="selectedTab === 'About'">
			Lorem ipsum dolor sit, amet consectetur adipisicing
			elit. Provident, obcaecati.
		</div>
		<div v-if="selectedTab === 'Vue'">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div v-if="selectedTab === 'Svelte'">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Cumque deserunt quos asperiores alias! Quaerat,
			explicabo?
		</div>
		<div v-if="selectedTab === 'React'">
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Cumque deserunt quos asperiores alias! Quaerat,
			explicabo? Lorem ipsum, dolor sit amet consectetur
			adipisicing elit. Voluptas veritatis quis perspiciatis
			ipsa quibusdam quo, tempora soluta doloremque dicta.
			Unde praesentium a pariatur rem porro ut nisi laborum
			ipsa eaque?
		</div></Tabs
	>
</template>

<style lang="scss" scoped></style>
