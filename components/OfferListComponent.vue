<template>
  <article class="offer">
    <h2 class="offer__headline">Tilbud og kampagner</h2>
    <span v-if="filteredOffers.length > 0">
        <OfferComponent v-for="offer in filteredOffers" :key="offer.id" :offer="offer" />
    </span>
    <p class="offer__message" v-else>
        Der er ingen tilbud eller kampagner i øjeblikket
    </p>
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
        .catch(err => {
            return
        })
        if (response) {
            this.offers = response
        }
    },

    computed: {
        filteredOffers () {
            if (this.offers) {
            return this.offers.filter(offer => {
                offer.Price = offer.Price.toString().replace(/\./g, ",")
                return (new Date().valueOf() >= new Date(offer.Start).valueOf() && new Date().valueOf() <= new Date(offer.End).valueOf())
            });
            }
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
        &__message {
            @include paragraph;
        }
    }
    @media (min-width: 600px) { 
        .offer {
            width: 90%;
            margin: 0;
            padding: 0 5% 0 0;
            text-align: center;
            max-width: 320px;
            &__headline {
                @include headline($blue,$headline--desktop);
            }
            &__message {
                @include paragraph(null, $paragraph--desktop);
            }
        }
    }

    @media (min-width: 1000px) { 
        .offer {
            justify-self: center;
            padding: 0;
        }
    }
</style>