<script setup>
const props = defineProps({
	image: {
		type: Boolean,
		required: false,
	},
	srcImage: {
		type: String,
		required: false,
	},
	columnTitle: {
		type: String,
		required: false,
	},
});
</script>

<template>
	<div class="table-column">
		<span></span>
		<span
			class="table-column__title"
			v-if="columnTitle"
			>{{ columnTitle }}:</span
		>
		<slot v-if="!image"></slot
		><img
			class="table-column__image"
			v-else
			:src="srcImage"
			alt="Book" />
	</div>
</template>

<style lang="scss" scoped>
.table-column {
	padding: 15px 0;
	position: relative;

	&__image {
		max-width: 100%;
		border-radius: 12px;
		@media screen and (max-width: 767px) {
			max-width: 200px;
		}
	}
	&__title {
		margin-right: 5px;

		@media screen and (max-width: 767px) {
			display: inline-block;
		}
	}
}
</style>
