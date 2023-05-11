<script setup>
import { computed, ref } from 'vue';

import Button from '@/components/Button.vue';
import BaseTable from '@/components/Table/BaseTable.vue';
import TableColumn from '@/components/Table/TableColumn.vue';
import TableRow from '@/components/Table/TableRow.vue';

const TableHeads = ['Id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px';

const sortField = ref('id');
const typeSort = ref('asc');

const books = ref([
	{
		id: 1,
		author: 'Dmitry Glukhovsky',
		title: 'Metro 2033',
		image:
			'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg',
		bg: '#FFA26B',
	},
	{
		id: 12,
		author: 'James Clear',
		title: 'Atomic Habits: An Easy',
		image:
			'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
		bg: '#00C48C',
	},
	{
		id: 2,
		author: 'J. K. Rowling',
		title: 'Harry Potter and the Order of the Phoenix',
		image:
			'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
		bg: '#00C48C',
	},
]);

const booksSorting = computed(() => {
	return books.value.sort((a, b) => {
		let modifier = 1;
		if (typeSort.value === 'desc') {
			modifier = -1;
		}
		if (a[sortField.value] < b[sortField.value]) {
			return -1 * modifier;
		}
		if (a[sortField.value] > b[sortField.value]) {
			return 1 * modifier;
		}
		return 0;
	});
});

const setSort = (name) => {
	if (sortField.value === name) {
		if (typeSort.value === 'asc') {
			typeSort.value = 'desc';
		} else {
			typeSort.value = 'asc';
		}
	} else {
		sortField.value = name;
	}
};
</script>

<template>
	<h1 class="header-1">Table</h1>
	<h2 class="header-2">Base Table</h2>
	<span> Sort Field: {{ sortField }}</span>
	<span> Type Sort: {{ typeSort }}</span>
	<BaseTable
		:head="TableHeads"
		:columnTemplates="tableSizeColumns"
		@sorting="setSort"
		><TableRow
			v-for="book in booksSorting"
			:key="book.id"
			:columnTemplates="tableSizeColumns"
			:bgRow="book.bg"
			><TableColumn :columnTitle="TableHeads[0]"
				>{{ book.id }} </TableColumn
			><TableColumn :columnTitle="TableHeads[1]"
				>{{ book.author }}
			</TableColumn>
			<TableColumn>{{ book.title }} </TableColumn>
			<TableColumn
				:image="true"
				:srcImage="book.image">
			</TableColumn>
			<TableColumn
				><Button
					label="Read Online"></Button></TableColumn></TableRow
	></BaseTable>
</template>

<style lang="scss" scoped></style>
