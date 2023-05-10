<script setup>
import { computed, ref } from 'vue';

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

import useVuelidate from '@vuelidate/core';
import {
	email,
	helpers,
	maxLength,
	minLength,
	numeric,
	sameAs,
} from '@vuelidate/validators';

const nameField = ref('');
const emailField = ref('');
const luckyField = ref('');
const passwordField = ref('');
const confirmPasswordField = ref('');
const alexField = ref('');

const mustBeAlex = (value) => value.includes('Alex');

const rules = computed(() => ({
	nameField: {
		minLength: helpers.withMessage(
			`Minimal length 3 symbols `,
			minLength(3),
		),
	},
	emailField: {
		email: helpers.withMessage('Not corrent email', email),
	},

	luckyField: {
		maxLength: helpers.withMessage(
			'Max length 2 symbols',
			maxLength,
		),
		numeric: helpers.withMessage(
			'You can only enter numbers',
			numeric,
		),
	},
	passwordField: {},
	confirmPasswordField: {
		sameAsPassword: helpers.withMessage(
			'Password does not match',
			sameAs(passwordField.value),
		),
	},
	alexField: {
		alexField: helpers.withMessage(
			'Where Alex?!',
			mustBeAlex,
		),
	},
}));

const v = useVuelidate(rules, {
	nameField,
	emailField,
	luckyField,
	passwordField,
	confirmPasswordField,

	alexField,
});

const submitForm = () => {
	v.value.$touch();
	if (v.value.$error) return;
	alert('Form submitted');
};
</script>

<template>
	<h1 class="header-1">Inputs</h1>
	<h2 class="header-2">Yout name</h2>

	<form>
		<Input
			label="Name"
			placeholder="Hello"
			:value="nameField"
			name="name"
			v-model:value="v.nameField.$model"
			:error="v.nameField.$errors" />
	</form>
	<h2 class="header-2">Yout email</h2>

	<form>
		<Input
			label="Email"
			placeholder="Email"
			name="email"
			type="email"
			:value="emailField"
			v-model:value="v.emailField.$model"
			:error="v.emailField.$errors" />
	</form>
	<h2 class="header-2">Your number</h2>

	<form>
		<Input
			label="Lucky number"
			placeholder="Lucky number"
			type="text"
			name="lucky"
			:value="luckyField"
			v-model:value="v.luckyField.$model"
			:error="v.luckyField.$errors" />
	</form>
	<h2 class="header-2">Your password</h2>

	<form>
		<Input
			label="Password"
			placeholder="Password"
			type="password"
			name="password"
			:value="passwordField"
			v-model:value="v.passwordField.$model" />
	</form>
	<form>
		<Input
			label="Confirm password"
			placeholder="Confirm password"
			type="confirmPassword"
			name="confirmPassword"
			:value="confirmPasswordField"
			v-model:value="v.confirmPasswordField.$model"
			:error="v.confirmPasswordField.$errors" />
	</form>
	<h2 class="header-2">Where Alex?</h2>

	<form @submit.prevent="submitForm">
		<Input
			label="Frontend string"
			name="frontend"
			placeholder="Input string with frontend"
			v-model:value="v.alexField.$model"
			:error="v.alexField.$errors" />
		<Button
			label="submit"
			color="primary"></Button>
	</form>
</template>

<style lang="scss" scoped>
h2 {
	margin-top: 20px;
}
form {
	margin-top: 35px;
}
</style>
