<script setup>
import Tabs from '@/components/Tabs.vue';

const tabs = [
	{ name: 'About', label: 'About project' },
	{ name: 'Vue', label: 'About Vue' },
	{ name: 'Svelte', label: 'About Svelte' },
	{ name: 'React', label: 'About React' },
];
</script>

<template>
	<h1 class="header-1">Tabs</h1>
	<Tabs :names="tabs" />
</template>

<style lang="scss" scoped></style>
