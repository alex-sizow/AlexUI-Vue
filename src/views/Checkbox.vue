<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import ref from 'vue';

const checkboxActive = ref(true);
</script>

<template>
	<h1 class="heading-1">Checkbox</h1>
	<h1 class="heading-2">Checkbox Active</h1>
	<Checkbox
		label="Checkbox
		Active"
		id="checkboxActive"
		value="I love it"
		:checked="checkboxActive"></Checkbox>
</template>

<style lang="scss" scoped></style>
