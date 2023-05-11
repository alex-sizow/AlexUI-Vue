<script setup>
const props = defineProps({
	head: {
		type: Array,
		required: false,
	},
	columnTemplates: {
		type: String,
		required: false,
	},
});
</script>

<template>
	<div class="table-wrapper">
		<div class="table">
			<div
				class="table-head"
				:style="{ 'grid-template-columns': columnTemplates }">
				<div
					v-for="(item, index) in head"
					:key="index"
					class="table-head__name">
					{{ item }}
				</div>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.table {
	width: 100%;
	margin-bottom: 40px;
	border-radius: 10px;
	margin-top: 15px;
	&-wrapper {
		display: flex;
		justify-content: center;
	}
	&-head {
		padding: 5px 16px;
		display: grid;
		border-radius: 10px;
		column-gap: 10px;
		align-items: center;
		border-bottom: 2px solid #eeeff4;
		background: #fff;
		&__name {
			display: flex;

			justify-content: flex-start;
			align-items: center;
			color: #999;
			cursor: pointer;
		}
		@media screen and (max-width: 767px) {
			display: none;
		}
	}
}
</style>
