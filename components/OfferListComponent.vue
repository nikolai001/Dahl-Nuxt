<template>
  <article class="offer">
    <h2 class="offer__headline">Tilbud og kampagner</h2>
    <OfferComponent v-for="offer in filteredOffers" :key="offer.id" :offer="offer" />
  </article>
</template>

<script>
import { fetchOffers } from '@/static/API'
import OfferComponent from './OfferComponent.vue'
export default {
	components: { OfferComponent },

    data () {
        return {
            offers: [],
        }
    },

    async created () {
        let response = await fetchOffers()
        if (response) {
            this.offers = response
        }
    },

    computed: {
        filteredOffers () {
            return this.offers.filter(offer => {
                offer.Price = offer.Price.toString().replace(/\./g, ",")
                return (new Date().valueOf() >= new Date(offer.Start).valueOf() && new Date().valueOf() <= new Date(offer.End).valueOf())
            });
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/assets/_collections';
    .offer {
        width: 90%;
        margin: 20px auto 0 auto;
        text-align: center;
        &__headline {
            @include headline;
            margin:0;
        }
    }
    @media (min-width: 600px) { 
        .offer {
            width: 90%;
            margin: 0;
            padding: 0 5% 0 0;
            text-align: center;
            &__headline {
                @include headline($blue,$headline--desktop);
            }
        }
    }
</style>