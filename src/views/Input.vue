<script setup>
import useVuelidate from '@vuelidate/core';
import { minLength } from '@vuelidate/validators';
import { computed, ref } from 'vue';

import Input from '@/components/Input.vue';

const nameField = ref('');

const rules = computed(() => ({
	nameField: {
		minLength: minLength(3),
	},
}));

const v = useVuelidate(rules, { nameField });
</script>

<template>
	<h1 class="header-1">Inputs</h1>
	<h2 class="header-2">Input</h2>

	<form>
		<Input
			label="Name"
			placeholder="Hello"
			:value="nameField"
			v-model:value="v.nameField.$model" />
	</form>
</template>

<style lang="scss" scoped>
h2 {
	margin-top: 20px;
}
form {
	margin-top: 20px;
}
</style>
