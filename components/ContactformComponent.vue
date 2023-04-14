<template>
	<form class="contact-form">
		<p class="contact-form__headline">Kontakt formular</p>
		<input
			class="contact-form__field"
			type="text"
			placeholder="Dit navn"
			v-model="request.name"
		/>
		<input
			class="contact-form__field"
			type="text"
			placeholder="Din e-mail"
			v-model="request.mail"
		/>
		<input
			class="contact-form__field"
			type="tel"
			pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
			placeholder="Dit telefon nr"
			v-model="request.phone"
		/>
		<textarea
			class="contact-form__field"
			type="text"
			placeholder="Din forespørgelse"
			v-model="request.message"
			@input="resize($event)"
		/>
		<label for="terms" class="contact-form__terms"
			><input
				name="terms"
				id="terms"
				type="checkbox"
				v-model="request.terms"
			/>Jeg acceptere hermed at Dahl opbevarer mine data gennem
			tredjeparts servere med formålet at tilsende tilbud til den givne
			e-mail eller mobil nummer samt generel kontakt mellem kunde og
			virksomhed.</label
		>
		<div class="contact-form__button-holder">
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
				@click="submit()"
			>
				Send
			</button>
		</div>
	</form>
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
				terms: false
			},
		};
	},
	methods: {
		clear() {
			this.request = { name: "", mail: "", phone: "", message: "", terms: false };
		},
    resize(e) {
      if (e.target.value.length > 0) {
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
      }
    },
	submit() {
		if (this.request.name.length > 1 && this.request.mail.length > 1 && this.request.phone.length > 1 && this.request.message.length > 1 && this.request.terms) {
			alert(this.request)
			this.clear()
		}
	}
	},
};
</script>


<style lang="scss" scoped>
@import '@/assets/scss/assets/_collections';
    
.contact-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &__headline {
        width: 90%;
        margin: 10px auto;
        text-align: left;
        @include headline($border, $paragraph)
    }

    &__terms {
        width: 90%;
        margin: 0 auto;
        @include paragraph(null,2.5vw);
        padding: 1% 1%;
    }

    &__button-holder {
        display: flex;
        flex-direction: column;
        .button-holder__button {
            cursor: pointer;
            &--submit {
                background-color: $cta-blue;
                border-radius: $rounded-border;
                @include paragraph($white,default);
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
                @include paragraph($inactive,default);
                border: none;
                width: fit-content;
                margin: 0 auto;
            }
        }
    }

    &__field {
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
        @include paragraph(null,$input);
        &::placeholder {
            @include paragraph($border,default);
            opacity: 1;
        }

        &:focus {
            border: solid 1px $blue;
            @include paragraph($blue,default);
            &::placeholder { 
                @include paragraph($blue,default);
            }
        }
    }
}

@media (min-width: 600px) {
    .contact-form {
        &__headline {
            @include headline($border, $paragraph--desktop)
        }

        &__terms {
            width: 90%;
            margin: 0 auto;
            @include paragraph(null,12px);
            padding: 1% 1%;
        }

        &__field {
            padding: 8px 8px;
            min-height: unset;
            width: 90%;
            margin: 12px auto;
            @include paragraph(null,$input--desktop);
        }

        &__button-holder {
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


@media (min-width: 1000px) {
    .contact__form {
        margin-bottom: 115px;
        &__field {
            padding: 8px 8px;
            min-height: unset;
            width: 90%;
            margin: 12px auto;
        }

        &__button-holder {
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

</style>