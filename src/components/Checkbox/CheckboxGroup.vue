<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue';

const props = defineProps({
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
	<Checkbox></Checkbox>
</template>

<style lang="scss" scoped></style>
