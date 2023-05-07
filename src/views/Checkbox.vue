<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import { ref } from 'vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);
</script>

<template>
	<h1 class="heading-1">Checkbox</h1>
	<h1 class="heading-2">Checkbox Active</h1>
	<Checkbox
		name="checkboxActive"
		label="Checkbox
		Active"
		id="checkboxActive"
		value="I love it"
		v-model:checked="checkboxActive"></Checkbox>
	<h1 class="heading-2">Checkbox Disabled</h1>
	<Checkbox
		name="checkboxDisabled"
		label="Checkbox
		Disabled"
		id="checkboxDisabled"
		value="I love it"
		:disabled="checkboxDisabled"
		v-model:checked="checkboxDisabledChecked"></Checkbox>
</template>

<style lang="scss" scoped></style>
