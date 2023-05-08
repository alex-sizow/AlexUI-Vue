<script setup>
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue';

import { ref } from 'vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfPeople = ref([
	{
		name: 'Platon',
		id: 'h1',
	},
	{
		name: 'Spartak',
		id: 'h2',
	},
	{
		name: 'Brut',
		id: 'h3',
	},
	{
		name: 'Heracle',
		id: 'h4',
	},
]);
const selectedPeople = ref(['h1', 'h3']);

const switchProfessional = ref(false);
</script>

<template>
	<h1 class="heading-1">Checkbox</h1>
	<h2 class="heading-2">Checkbox Active</h2>
	<Checkbox
		name="checkboxActive"
		label="Checkbox
		Active"
		id="checkboxActive"
		value="I love it"
		v-model:checked="checkboxActive"></Checkbox>
	<h2 class="heading-2">Checkbox Disabled</h2>
	<Checkbox
		name="checkboxDisabled"
		label="Checkbox
		Disabled"
		id="checkboxDisabled"
		value="I love it"
		:disabled="checkboxDisabled"
		v-model:checked="checkboxDisabledChecked"></Checkbox>
	<h2 class="heading-2">Checkbox Group</h2>
	<p>Selected People: {{ selectedPeople }}</p>
	<CheckboxGroup
		name="selectedPeople"
		v-model:value="selectedPeople"
		:options="listOfPeople"></CheckboxGroup>
	<h2 class="heading-2">Checkbox {{ switchProfessional }}</h2>
	<Checkbox
		type="switch"
		name="switch"
		label="Checkbox
		Switch"
		id="switch"
		value="I love it"
		v-model:checked="switchProfessional"></Checkbox>
</template>

<style lang="scss" scoped></style>
