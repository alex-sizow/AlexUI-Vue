<script setup>
import { ref } from 'vue';
import Radiobutton from '../components/Radiobutton.vue';

const listOfPeople = ref([
	{
		name: 'Platon',
		id: 'f1',
	},
	{
		name: 'Spartak',
		id: 'f2',
	},
	{
		name: 'Brut',
		id: 'f3',
	},
	{
		name: 'Heracle',
		id: 'f4',
	},
]);

const selectedPeople = ref({});

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
	<h1 class="heading-1">Radiobutton</h1>
	<h2 class="heading-2">Basic</h2>
	<p>{{ selectedPeople }}</p>
	<div
		v-for="man in listOfPeople"
		:key="man.id">
		<Radiobutton
			:id="man.id"
			:value="man.name"
			:label="man.name"
			name="Rome"
			v-model:checkedValue="selectedPeople"></Radiobutton>
	</div>
	<h2 class="heading-2">Disabled</h2>
	<Radiobutton
		id="disabled"
		value="disabled"
		label="disabled"
		name="Rome"
		v-model:checkedValue="disabledRadioChecked"
		:disabled="disabledRadio"></Radiobutton>
</template>

<style lang="scss" scoped></style>
