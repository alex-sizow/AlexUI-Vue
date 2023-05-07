<script setup>
const props = defineProps({
	name: {
		type: String,
		default: '',
	},
	id: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	checked: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<input
		type="checkbox"
		:name="name"
		:id="id"
		:value="value"
		:checked="checked" />
	<label for="id">{{ label }}</label>
</template>

<style lang="scss" scoped></style>
