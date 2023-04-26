<template>
    <div class="card">
        <h3 class="card__headline">{{offer.Name}}</h3>
        <p class="card__description">{{offer.Description}}</p>
        <p class="card__price">Fra {{offer.Price}} Kr <br><small>obs pris er vejledende</small></p>
        <p class="card__date">Til og med {{offer.End}} <br><small>obs dato er i År-måned-dag</small></p>
    </div>
</template>

<script>

export default {
    props : {
        offer: Object
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/assets/_collections';
    .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: $background-white;
        border-radius: $primary-border;
        box-shadow: $el-1;
        padding: 10px 2%;
        margin: 20px 0;
        box-sizing: border-box;
        &__headline {
            @include headline($blue, $menu);
            margin: 0 0 0 0;
        }
        &__description {
            @include paragraph;
            margin: 15px 0 10px 0;
            text-align: justify;
        }
        &__price {
            @include paragraph;
            margin: 0;
        }
        &__date {
            @include paragraph;
            margin: 0;
        }                
    }
    @media (min-width: 600px) { 
        .card {
            padding: 10px 8px;
            &__headline {
                @include headline($blue, $menu--tablet);
                margin: 0 0 0 0;
            }
            &__description {
                @include paragraph(null,$paragraph--desktop);
            }
            &__price {
                @include paragraph(null,$paragraph--desktop);
            }
            &__date {
                @include paragraph(null,$paragraph--desktop);
            }                
        }   
    }
</style>