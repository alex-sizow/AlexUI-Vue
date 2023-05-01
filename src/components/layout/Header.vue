<template>
	<header class="navigation">
		<router-link to="/">My UI Kit</router-link>
	</header>
</template>

<style lang="scss" scoped>
.navigation {
	background: oklch(100% 0 274.3);
	font-weight: bold;
	padding: 0 20px;
	box-shadow: 0px 0px 10px oklch(0% 0 274.3);
	height: 62px;
	display: flex;
	align-items: center;
	z-index: 1;
	position: relative;
}
</style>
