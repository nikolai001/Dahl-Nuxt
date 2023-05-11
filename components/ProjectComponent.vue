<template>
    <article class="project-page">

        <h1 class="project-page__headline">{{projectName}}</h1>
        <SliderComponent :images="images"/>
    </article>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue'
import { fetchImages } from '@/static/API'

export default {

    components: {
        SliderComponent
    },

    data () {
        return {
            images : [],
            projectName: ''
        }
    },

    async created () {
        if (!localStorage.getItem('projects') || !JSON.parse(localStorage.getItem('projects')).images.find(x => x.id == this.$route.params.index)) {
			let response = await fetchImages(this.$route.params.index)
			.catch(err => {
				return
			})
			if (response) {
				this.images = response.Images
                this.projectName = response.Name
			}
		}
		else {
			this.images = JSON.parse(localStorage.getItem('projects')).images.find(x => x.id == this.$route.params.index).Images
		}
    }
}
</script>

<style lang="scss" scoped>
    @import "./assets/scss/assets/_collections";
    .project-page {
        &__headline {
            @include headline;
            width: 95%;
            margin: 30px auto 30px auto;
        }
    }
    @media (min-width: 600px) {
        .project-page {
            &__headline {
                width: 80%;
                max-width: 680px;
                margin: 30px auto 0 auto;
                @include headline(null, $headline--desktop);
            }
        }   
    }
    @media (min-width: 1000px) {
        .project-page {
            &__headline {
                width: 70%;
                max-width: 825px;
            }
        }
    }
</style>