<script setup>
const props = defineProps({
	label: {
		type: String,
		default: 'Button',
	},
	color: {
		type: String,
		default: 'primary',
	},
	rounded: {
		type: Boolean,
		required: false,
	},
});
</script>

<template>
	<button
		:class="[
			'button',
			`button__${color}`,
			{ button__rounded: rounded },
		]">
		{{ label }}
	</button>
</template>

<style lang="scss" scoped>
.button {
	margin-right: 10px;
	margin-bottom: 10px;
	padding: 0 19px;
	height: 40px;
	color: oklch(100% 0 0);
	border-radius: 9px;
	border: none;
	cursor: pointer;
	font-size: 15px;
	transition: 0.3s;
	&:enabled:hover {
		border-radius: 12px;
	}
	&__primary {
		background: var(--primary);

		box-shadow: 2px 2px 3px oklch(45.15% 0.129 274.65),
			-2px -2px 3px oklch(74.47% 0.131 272.33);
		&:enabled:hover {
			background: var(--primary-hover);
			box-shadow: 1px 1px 2px oklch(55.27% 0.075 278.16),
				-1px -1px 2px oklch(94.92% 0.025 249.95);
		}
	}
	&__second {
		background: var(--second);

		box-shadow: 2px 2px 3px oklch(36.23% 0.123 313.57),
			-2px -2px 3px oklch(78.71% 0.214 327.37);
		&:enabled:hover {
			background: var(--second-hover);
			box-shadow: 1px 1px 2px oklch(53.78% 0.079 314.4),
				-1px -1px 2px
					oklch(95.99% 0.03561632559062425 325.8508054977197);
		}
	}
	&__success {
		background: var(--success);
		box-shadow: 2px 2px 3px oklch(48.91% 0.103 164.78),
			-2px -2px 3px oklch(88.9% 0.177 169.38);
		&:enabled:hover {
			background: var(--success-hover);
			box-shadow: 1px 1px 2px oklch(55.96% 0.065 173.47),
				-1px -1px 2px oklch(95.02% 0.075 195.96);
		}
	}
	&__info {
		background: var(--info);
		box-shadow: 2px 2px 3px
				oklch(41.84% 0.12559170939098369 252.10819561926587),
			-2px -2px 3px
				oklch(74.61% 0.15569076978964075 233.78068600782225);

		&:enabled:hover {
			background: var(--info-hover);
			box-shadow: 1px 1px 2px oklch(50.53% 0.08 245.87),
				-1px -1px 2px
					oklch(93.45% 0.10162598362888804 195.5530904688666);
		}
	}
	&__warning {
		background: var(--warning);
		box-shadow: 2px 2px 3px oklch(53.41% 0.084 50.78),
			-2px -2px 3px
				oklch(92.82% 0.10082450146943209 92.33869708732371);

		&:enabled:hover {
			background: var(--warning-hover);
			box-shadow: 1px 1px 2px oklch(58.28% 0.05 51.33),
				-1px -1px 2px
					oklch(99.5% 0.024805960337700505 106.84204842350611);
		}
	}
	&__danger {
		background: var(--danger);
		box-shadow: 2px 2px 3px oklch(47.61% 0.121 13.51),
			-2px -2px 3px
				oklch(77.72% 0.1405968099502956 1.6380451200893713);

		&:enabled:hover {
			background: var(--danger-hover);
			box-shadow: 1px 1px 2px oklch(55.9% 0.059 10.32),
				-1px -1px 2px oklch(98.84% 0.01 325.65);
		}
	}
	&__rounded {
		border-radius: 15px;
		&:enabled:hover {
			border-radius: 18px;
		}
	}
}
</style>
