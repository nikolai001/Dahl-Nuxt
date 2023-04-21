<template>
	<article class="services">
		<h2 class="services__headline">Vores services</h2>
		
        <select class="services__select" v-model="currentService">
            <option v-for="service in services" :key="service.id" :value="service.id">
                {{service.Name}}
            </option>
        </select>
		
		<p v-if="returnedService" class="services__paragraph">
			{{ returnedService.Description }}
		</p>

		<div class="services__image-container">
			<img
				v-if="returnedService && returnedService.Image != null"
				:src="$config.baseUrl + returnedImage.img"
				:alt="returnedImage.name"
				class="image-container__image"
			/>
		</div>
	</article>
</template>

<script>

import { fetchServices } from '@/static/API'

export default {
	name: "ServicesComponent",
	components: {},
	props: {},
	data() {
		return {
            currentService: null,
			services: [],
		};
	},
	async created () {
		let response = await fetchServices()
		if (response) {
			this.services = response
			this.currentService = response[0].id
		}
	},
    computed: {
        returnedService () {
            return this.services.find(x => x.id === this.currentService)
        },

		returnedImage () {
			const preferredSizes = ['large', 'medium', 'thumbnail'];

			const reorderedSizes = ['large', 'medium', 'thumbnail'].filter(size => preferredSizes.includes(size));

			const availableSize = reorderedSizes.find(size => this.returnedService.Image[size]);

			if (availableSize) {
				return {img: this.returnedService.Image[availableSize].url, name:this.returnedService.Image.name};
			} else {
				return {img: this.returnedService.Image.url, name:this.returnedService.Image.name};
			}
		}
    }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";
.services {
	overflow-x: hidden;
	display: grid;

    &__select {
        border-radius: $secondary-border;
        padding: 10px 8px;
        border: solid 1px $border;
        outline: none;
        min-height: 38px;
        box-sizing: border-box;
        width: 90%;
        margin: 10px auto;
        overflow: hidden;
        background-color: #fafafa;
        @include paragraph($border, $input);
        &:hover {
            border: solid 1px $blue;
            @include paragraph($blue, $input);
        }
    }

	&__headline {
		@include headline($blue, $headline);
		text-align: left;
		padding: 0 5%;
		margin: 77px 0 32px 0;
	}
	&__paragraph {
		@include paragraph(null, $paragraph);
		text-align: left;
		padding: 0 5%;
		margin-bottom: 32px;
	}

	&__image-container {
		display: flex;
		flex-direction: column;
	}
}

.image-container__image {
	width: 60%;
	padding: 0 5%;
	box-sizing: border-box;
	align-self: center;
}

@media (min-width: 600px) {
	.services {
		grid-template-columns: 1fr 1fr;
		display: grid;

        &__select {
            width: 50%;
            max-width: 500px;
            padding: 8px 8px;
            min-height: unset;
            grid-row: 1;
            grid-column: 1/-1;
            align-self: end;
            justify-self: end;
            margin: 0 10px 32px 0;
            @include paragraph($border, $input--desktop);
            &:hover {
                border: solid 1px $blue;
                @include paragraph($blue, $input--desktop);
            }
        }

		&__headline {
			@include headline(null, $headline--desktop);
			grid-column: 1/2;
            grid-row: 1;
			padding: 0 10%;
		}
		&__paragraph {
			@include paragraph(null, $paragraph--desktop);
			padding: 0 10%;
			grid-column: 1/2;
			width: 100%;
		}

		&__image-container {
			flex-direction: row;
			padding: 0 5% 0 15%;
			justify-content: center;
			grid-column: 2/3;
		}
	}

	.image-container__image {
		width: 100%;
		margin-bottom: 0;
		padding: 0;
		height: fit-content;
		max-width: 250px;
	}
}

@media (min-width: 1000px) {
	.services {
		display: grid;
		grid-template-columns: 1fr 0.6fr;
        max-width: 1920px;
        margin: 0 auto;
        &__select {
            width: 50%;
            max-width: 400px;
            padding: 8px 8px;
            min-height: unset;
            grid-row: 1;
            grid-column: 1/-1;
            justify-self: center;
            align-self: end;
            @include paragraph($border, $input--desktop);
            &:hover {
                border: solid 1px $blue;
                @include paragraph($blue, $input--desktop);
            }
        }

		&__paragraph {
			padding: 0 10%;
			width: 80%;
		}

		&__image-container {
			grid-column: 2/3;
			padding-left: 10%;
			width: 100%;
			justify-content: start;
		}
	}

	.image-container__image {
		width: 75%;
		margin-bottom: 0;
	}
}
</style>