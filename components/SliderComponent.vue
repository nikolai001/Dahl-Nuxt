<template>
	<div class="slider">
		<div v-if="images[currentImage]"
			class="slider__image"
			:style="{
				backgroundImage:
					'url(' + $config.baseUrl+images[currentImage].url + ')',
			}"
		>
			<div class="slider__progress">
				<button class="progress__button progress__button--left material-symbols-rounded" @click="slideProgress('prev')">
					chevron_left
				</button>
				<button class="progress__button progress__button--right material-symbols-rounded" @click="slideProgress('next')">
					chevron_right
				</button>
			</div>
			<p class="image__indicator">{{ currentImage +1 }}/{{ images.length }}</p>
		</div>
		<div class="slider__text">
			<span v-if="images[currentImage] && images[currentImage].caption">{{images[currentImage].caption}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "GalleryListComponent",
	props: {
		images: Array
	},
	data() {
		return {
			currentImage: 0,
		};
	},
	methods: {
		slideProgress(Direction) {
			if (Direction !== "next") {
				if (this.currentImage !== 0) {
					this.currentImage--;
					return;
				}
				this.currentImage = this.images.length-1;
				return;
			}
			if (this.currentImage !== this.images.length-1) {
				this.currentImage++;
				return;
			}
			this.currentImage = 0;
			return;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";

.slider {
	width: 95%;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	margin: 10px auto;
	box-shadow: $el-1;
	border-radius: 12px;
	&__text {
		width: 100%;
		background-color: $background-white;
		border-radius: 0 0 12px 12px;
		min-height: 40px;
		text-align: left;
		box-sizing: border-box;
		margin: auto 0;
		padding: 5px 5px;
		@include paragraph($border, $paragraph);
	}
	&__progress {
		width: 100%;
		display: flex;
		grid-row: 1 / span 1;
		justify-content: space-between;
		grid-column: 1/2;
		align-self: center;
		margin: 0;
		padding: 0 5px;
		box-sizing: border-box;
		.progress__button {
			border-radius: 100em;
			background-color: $cta-blue;
			border: none;
			width: 8%;

			cursor: pointer;
			box-shadow: $el-1;
			padding: 0;
			aspect-ratio: 1/1;
			@include icon($background-white, 7vw);
            &--left {
                text-align: left;
            }
            &--right {
                text-align: right;
            }
		}
	}
	&__image {
		background-color: $grey;
		width: 100%;
		aspect-ratio: 16/9;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 100%;
		border-radius: 12px 12px 0 0;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
		.image__indicator {
			text-align: center;
			align-self: flex-start;
			grid-row: 1 / span 1;
			grid-column: 1/2;
			justify-self: end;
			background-color: $background-white;
			width: 10%;
			min-width: 35px;
            max-width: 40px;
			padding: 2px;
			border-radius: 0 12px 0 12px;
			margin: 0 0 auto 0;
			box-shadow: $el-1;
            aspect-ratio: 2/1.5;
            display: flex;
            flex-direction: column;
            place-content: center;
			@include paragraph($cta-blue, $input);
		}
	}
}

@media (min-width: 600px) {
	.slider {
		width: 80%;
        max-width: 680px;
		margin: 25px auto;
		&__text {
			min-height: 40px;
			margin: auto 0;
			padding: 5px 5px;
			@include paragraph($border, $paragraph--desktop);

		}
		&__progress {
			padding: 0 5px;
			.progress__button {
                width: 45px;
				@include icon(null, 42px);
			}
		}
		&__image {
			.image__indicator {
				padding: 4px;
				@include paragraph($cta-blue, $input--desktop);
			}
		}
	}
}

@media (min-width: 1000px) {
    	.slider {
		width: 70%;
        max-width: 825px;
		margin: 25px auto;
		&__image {
			.image__indicator {
                padding: 0;
                min-width: unset;
                max-width: unset;
                width: 50px;
			}
		}
	}
}
</style>