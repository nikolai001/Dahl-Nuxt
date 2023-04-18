<template>
	<article class="contact-map">
		<ContactformComponent style="display: flex;" />
		<iframe
			class="contact-map__map"
			src="https://snazzymaps.com/embed/475725"
		></iframe>
	</article>
</template>

<script>

import ContactformComponent from './ContactformComponent.vue';

export default {

	components: {
		ContactformComponent,
	},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";

.contact-map {
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: 0 auto 30px auto;
	box-shadow: $el-1;
	border-radius: $primary-border;
	overflow: hidden;

	&__map {
		width: 100%;
		aspect-ratio: 1/1;
		border: none;
	}
}

@media (min-width: 600px) {
	.contact-map {
		display: grid;
		grid-template-columns: 3fr 2fr;
		width: 90%;
		margin: 0 auto 30px auto;

		&__map {
			width: 100%;
			aspect-ratio: unset;
			height: 100%;
			grid-column: 1/2;
			grid-row: 1;
		}
	}
}

@media (min-width: 1000px) {
	.contact-map {
		width: 90%;
		margin: 0 auto 30px auto;
    	max-width: 1000px;
    	grid-template-columns: 5fr 2fr;
	}
}

</style>