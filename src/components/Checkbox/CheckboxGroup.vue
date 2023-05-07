<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue';

const emits = defineEmits('update:value');

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	options: {
		type: Array,
		required: true,
		validator: (value) => {
			const hasNameKey = value.every((option) =>
				Object.keys(option).includes('name'),
			);
			const hasIdKey = value.every((option) =>
				Object.keys(option).includes('id'),
			);
			return hasNameKey && hasIdKey;
		},
	},
});
</script>

<template>
	<div
		v-for="option in options"
		:key="option.id">
		<Checkbox
			:label="option.name"
			:id="option.id"
			:name="name"
			:value="option.name"
			:checked="value.includes(option.id)"></Checkbox>
	</div>
</template>

<style lang="scss" scoped></style>
