<script setup>
import Button from '../components/Button.vue';

const eventForButton = () => {
	alert('You clicked danger button!');
};
</script>

<template>
	<h1 class="heading-1">Button</h1>
	<div class="colors">
		<h2 class="heading-2">Colors</h2>
		<div class="colors__line">
			<Button label="Primary"></Button>
			<Button
				label="Second"
				color="second"></Button>
			<Button
				label="Success"
				color="success"></Button>
			<Button
				label="Info"
				color="info"></Button>
			<Button
				label="Warning"
				color="warning"></Button>
			<Button
				label="Danger"
				color="danger"></Button>
		</div>
	</div>

	<div class="rounded">
		<h2 class="heading-2">Rounded</h2>
		<div class="colors__line">
			<Button
				label="Primary"
				:rounded="true"></Button>
			<Button
				label="Second"
				color="second"
				:rounded="true"></Button>
			<Button
				label="Success"
				color="success"
				:rounded="true"></Button>
			<Button
				label="Info"
				color="info"
				:rounded="true"></Button>
			<Button
				label="Warning"
				color="warning"
				:rounded="true"></Button>
			<Button
				label="Danger"
				color="danger"
				:rounded="true"></Button>
		</div>
	</div>
	<div class="colors">
		<h2 class="heading-2">Disabled</h2>
		<div class="colors__line">
			<Button
				label="Primary"
				:disabled="true"></Button>
			<Button
				label="Second"
				color="second"
				:rounded="true"
				:disabled="true"></Button>
		</div>
	</div>
	<div class="colors">
		<h2 class="heading-2">Outlined</h2>
		<div class="colors__line">
			<Button
				label="Primary"
				outlined="true"></Button>
			<Button
				label="Second"
				color="second"
				rounded="true"
				disabled="true"
				outlined="true"></Button>
			<Button
				label="Danger"
				color="danger"
				outlined="true"></Button>
		</div>
	</div>
	<div class="colors">
		<h2 class="heading-2">Outlined</h2>
		<div class="colors__line">
			<Button
				outlined="true"
				icon="heart"></Button>
			<Button
				color="second"
				rounded="true"
				disabled="true"
				outlined="true"
				icon="hand"></Button>
			<Button
				color="warning"
				rounded="true"
				icon="address-book"></Button>
			<Button
				label="Credit-card"
				color="danger"
				icon="credit-card"></Button>
			<Button
				color="danger"
				icon="lemon"></Button>
		</div>
	</div>
	<div class="colors">
		<h2 class="heading-2">Size</h2>
		<div class="colors__line">
			<Button
				label="Normal"
				color="primary"
				:rounded="true"
				size="normal"></Button>
			<Button
				label="Large"
				color="warning"
				:rounded="true"
				size="large"></Button>
		</div>
	</div>
	<div class="colors">
		<h2 class="heading-2">Event</h2>
		<div class="colors__line">
			<Button
				label="Large"
				color="danger"
				:rounded="true"
				size="large"
				@click="eventForButton"></Button>
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
