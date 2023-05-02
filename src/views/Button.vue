<script setup>
import Button from '../components/Button.vue';
</script>

<template>
	<h1 class="heading-1">Button</h1>
	<div class="colors">
		<h2 class="heading-2">Colors</h2>
		<div class="colors__line">
			<Button label="Primary"></Button>
			<Button
				label="Primary"
				color="second"></Button>
			<Button
				label="Primary"
				color="success"></Button>
			<Button
				label="Primary"
				color="info"></Button>
			<Button
				label="Primary"
				color="warning"></Button>
			<Button
				label="Primary"
				color="danger"></Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
h1 {
	margin-bottom: 20px;
}

.colors {
	.colors__line {
		display: flex;
		flex-wrap: wrap;
		gap: 18px;
	}
}
</style>
