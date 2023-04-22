<template>
  <div class="card">
    <img v-if="worker.Image" class="card__image" :src="$config.baseUrl + returnedImage.img" :alt="returnedImage.name">
    <p v-if="worker.Name" class="card__field"><i class="field__icon material-symbols-rounded">person</i>{{worker.Name}}</p>
    <p v-if="worker.Phone" class="card__field"><i class="field__icon material-symbols-rounded">smartphone</i>{{worker.Phone}}</p>
    <p v-if="worker.job" class="card__field"><i class="field__icon material-symbols-rounded">work</i>{{worker.job.Name}}</p>
  </div>
</template>

<script>
export default {
    props: {
        worker: Object
    },
    computed: {
		returnedImage () {
			const preferredSizes = ['thumbnail', 'medium', 'large'];

			const reorderedSizes = ['thumbnail', 'medium', 'large'].filter(size => preferredSizes.includes(size));

			const availableSize = reorderedSizes.find(size => this.worker.Image[size]);

			if (availableSize) {
				return {img: this.worker.Image[availableSize].url, name:this.worker.Image.name};
			} else {
				return {img: this.worker.Image.url, name:this.worker.Image.name};
			}
		}
    }
}
</script>

<style lang="scss" scoped>
    @import "./assets/scss/assets/_collections";

    .material-symbols-rounded {
        font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 48
        }

    .card {
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 3fr;
        background-color: $background-white;
        box-shadow: $el-1;
        margin: 25px auto;
        padding: 6% 10%;
        box-sizing: border-box;
        border-radius: $primary-border;
        &__image {
            width: 100%;
            border-radius: $rounded-border;
            grid-column: 1/2;
            grid-row: 1/span 3;
            place-self: center;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
        &__field {
            margin: 0 0 0 10%;
            grid-column: 2/3;
            display: flex;
            align-items: center;
            @include paragraph($blue, $paragraph);
            &:nth-child(3) {
                margin: 6% 0 6% 10%;
            }
            .field__icon {
                margin: 0;
                padding: 0;
                @include icon($blue, $icon);
                height: fit-content;
                margin-right: 5%;
            }
        }
    }

    @media(min-width: 600px) {
        .card {
            width: 90%;
            margin: 25px auto;
            padding: 10px 5px;
            max-width: 280px;
            &__field {
                margin: 0 0 0 20px;
                @include paragraph($blue, $paragraph--desktop);
                &:nth-child(3) {
                    margin: 10px 0 10px 20px;
                }
                .field__icon {
                    margin: 0;
                    padding: 0;
                    @include icon($blue, $icon--desktop);
                    height: fit-content;
                    margin-right: 5%;
                }
            }
        }
    }

    @media(min-width: 1000px) {
        .card {
            padding: 20px 10px;
            max-width: 350px;
        }
    }
</style>