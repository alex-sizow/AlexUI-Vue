<script setup>
import { ref } from 'vue';

import Button from '@/components/Button.vue';
import ProgressBar from '@/components/Progress/ProgressBar.vue';
import ProgressCircle from '@/components/Progress/ProgressCircle.vue';

const percentBar = ref(63);
const percentCircle = ref(51);

const addPercentBar = (number) => {
	percentBar.value += number;
	if (percentBar.value < 0) {
		percentBar.value = 0;
	}
	if (percentBar.value > 100) {
		percentBar.value = 100;
	}
};

const addPercentCircle = (number) => {
	percentCircle.value += number;
	if (percentCircle.value < 0) {
		percentCircle.value = 0;
	}
	if (percentCircle.value > 100) {
		percentCircle.value = 100;
	}
};
</script>

<template>
	<div>
		<h1 class="header-1">Progress</h1>
		<h2 class="header-2">Progress Bar</h2>
		<ProgressBar
			maxWidth="350px"
			:percent="percentBar"></ProgressBar>
		<Button
			:style="[{ margin: '10px' }]"
			label="Add 4%"
			@click="addPercentBar(4)"></Button>
		<Button
			:style="[{ margin: '10px' }]"
			label="subtract 8%"
			@click="addPercentBar(-8)"></Button>
	</div>
	<h2 class="header-2">Progress Circle</h2>
	<ProgressCircle
		:style="[{ margin: '15px' }]"
		:percent="percentCircle"
		color="danger"></ProgressCircle>
	<Button
		:style="[{ margin: '10px' }]"
		label="Add 5%"
		color="danger"
		@click="addPercentCircle(5)"></Button>
	<Button
		:style="[{ margin: '10px' }]"
		label="subtract 2%"
		color="danger"
		@click="addPercentCircle(-2)"></Button>
</template>

<style lang="scss" scoped></style>
