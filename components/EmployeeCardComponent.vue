<template>
  <div class="card">
    <img class="card__image" :src="require(`@/assets/Relay.jpg`)" alt="Relay">
    <p class="card__field"><i class="field__icon material-symbols-rounded">person</i>{{worker.name}}</p>
    <p class="card__field"><i class="field__icon material-symbols-rounded">smartphone</i>{{worker.phone}}</p>
    <p class="card__field"><i class="field__icon material-symbols-rounded">work</i>{{worker.job}}</p>
  </div>
</template>

<script>
export default {
    props: {
        worker: Object
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
            font-size: 4.5vw;
            color: $blue;
            &:nth-child(3) {
                margin: 6% 0 6% 10%;
            }
            .field__icon {
                margin: 0;
                padding: 0;
                font-size: 6vw;
                height: fit-content;
                margin-right: 5%;
            }
        }
    }
</style>