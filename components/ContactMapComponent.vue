<template>
	<article class="contact-map">
		<form class="contact-map__form">
			<p class="contact-map__headline">Kontakt formular</p>
			<input
				class="form__field"
				type="text"
				placeholder="Dit navn"
				v-model="request.name"
			/>
			<input
				class="form__field"
				type="text"
				placeholder="Din e-mail"
				v-model="request.mail"
			/>
			<input
				class="form__field"
				type="tel"
				pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
				placeholder="Dit telefon nr"
				v-model="request.phone"
			/>
			<textarea
				class="form__field"
				type="text"
				placeholder="Din forespørgelse"
				v-model="request.message"
        @input="resize($event)"
			/>
			<div class="form__button-holder">
				<button
					type="button"
					class="button-holder__button button-holder__button--cancel"
					@click="clear()"
				>
					Ryd formular
				</button>
				<button
					type="button"
					class="button-holder__button button-holder__button--submit"
				>
					Send
				</button>
			</div>
		</form>
		<iframe
			class="contact-map__map"
			src="https://snazzymaps.com/embed/475725"
		></iframe>
	</article>
</template>

<script>
export default {
	data() {
		return {
			request: {
				name: "",
				mail: "",
				phone: "",
				message: "",
			},
		};
	},
	methods: {
		clear() {
			this.request = { name: "", mail: "", phone: "", message: "" };
		},
    resize(e) {
      if (e.target.value.length > 0) {
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
      }
    }
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
	&__headline {
    width: 90%;
    margin: 10px auto;
		text-align: left;
    color: $border;
	}
	&__form {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;

		.form__button-holder {
			display: flex;
			flex-direction: column;
			.button-holder__button {
				cursor: pointer;
				&--submit {
					background-color: $cta-blue;
					border-radius: $rounded-border;
					color: $white;
					text-align: center;
					width: 40%;
					max-width: 120px;
					padding: 8px 2px;
					border: none;
					margin: 0 auto;
					margin-top: 10px;
				}
				&--cancel {
					background-color: transparent;
					color: $inactive;
					border: none;
					width: fit-content;
					margin: 0 auto;
				}
			}
		}

		.form__field {
			border-radius: $secondary-border;
			padding: 10px 8px;
			border: solid 1px $border;
			outline: none;
			resize: vertical;
			min-height: 38px;
			box-sizing: border-box;
			width: 90%;
			margin: 10px auto;
			overflow: hidden;
			background-color: $background-white;

      &::placeholder {
        color: $border;
        opacity: 1;
      }

			&:focus {
				border: solid 1px $blue;
				color: $blue;
			}
		}
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

		&__form {
			.form__field {
				padding: 8px 8px;
				min-height: unset;
				width: 90%;
				margin: 12px auto;
			}

			.form__button-holder {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
        margin: 12px 0 0 0;
				.button-holder__button {
					margin: 0;
					&--submit {
						max-width: 100px;
					}
					&--cancel {
						width: fit-content;
					}
				}
			}
		}
	}
}

@media (min-width: 1000px) {
	.contact-map {
		width: 90%;
		margin: 0 auto 30px auto;
    max-width: 1000px;
    grid-template-columns: 5fr 2fr;
		&__form {
      margin-bottom: 115px;
			.form__field {
				padding: 8px 8px;
				min-height: unset;
				width: 90%;
				margin: 12px auto;
			}

			.form__button-holder {
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
				.button-holder__button {
					margin: 0;
					&--submit {
						max-width: 100px;
					}
					&--cancel {
						width: fit-content;
					}
				}
			}
		}
	}
}

</style>