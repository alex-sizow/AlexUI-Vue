<script setup></script>

<template>
	<div class="progress-container">
		<div class="progress">
			<progress
				class="progress-bar"
				id="file"
				max="100"
				value="70"></progress>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.progress {
	progress[value] {
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;

		width: 100%;
		height: 14px;
	}
	progress[value]::-webkit-progress-bar {
		background-color: var(--primary-hover);
		border-radius: 8px;
	}
	progress[value]::-webkit-progress-value {
		background-color: var(--primary);
		border-radius: 8px;
		background-size: 35px 20px, 100% 100%, 100% 100%;
	}

	progress[value]::-moz-progress-bar {
		background-image: -moz-linear-gradient(
				135deg,
				transparent 33%,
				rgba(0, 0, 0, 0.1) 33%,
				rgba(0, 0, 0, 0.1) 66%,
				transparent 66%
			),
			-moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
			-moz-linear-gradient(left, #09c, #f44);

		border-radius: 2px;
		background-size: 35px 20px, 100% 100%, 100% 100%;
	}

	&-percent {
		display: block;
		text-align: center;
		font-weight: bold;
		font-size: 17px;
		margin-bottom: 10px;
	}
}
</style>
