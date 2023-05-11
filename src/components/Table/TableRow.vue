<script setup>
const props = defineProps({
	columnTemplates: {
		type: String,
		required: false,
	},
	bgRow: {
		type: String,
		required: false,
	},
});
</script>

<template>
	<div
		class="table-row"
		:style="{
			'grid-template-columns': columnTemplates,
			'background-color': bgRow,
		}">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.table-row {
	margin-top: 10px;
	border-bottom: 2px solid #eeeff4;
	position: relative;
	display: grid;
	border-radius: 10px;
	column-gap: 10px;
	align-items: center;
	padding: 0 16px;
	@media screen and (max-width: 767px) {
		display: block;
	}
	&:last-child {
		border-bottom: none;
	}
	&--items-center {
		justify-items: center;
	}
}
</style>
