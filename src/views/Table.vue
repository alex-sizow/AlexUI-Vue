<script setup>
import { ref } from 'vue';

import Button from '@/components/Button.vue';
import BaseTable from '@/components/Table/BaseTable.vue';
import TableColumn from '@/components/Table/TableColumn.vue';
import TableRow from '@/components/Table/TableRow.vue';

const TableHeads = ['Id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px';

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
</script>

<template>
	<h1 class="header-1">Table</h1>
	<h2 class="header-2">Base Table</h2>
	<BaseTable
		:head="TableHeads"
		:columnTemplates="tableSizeColumns"
		><TableRow
			v-for="book in books"
			:key="book.id"
			:columnTemplates="tableSizeColumns"
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
