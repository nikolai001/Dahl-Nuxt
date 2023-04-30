<template>
	<div class="recent-projects">
		<nuxt-link :to="'projects/'+image.id" v-for="image in imagesWithBestFormats" :key="image.id" class="recent-projects__img" :style="{ backgroundImage: 'url('+ $config.baseUrl+image.bestFormatUrl +')'}">
		</nuxt-link>	
	</div>
</template>

<script>
import { fetchProjects } from '@/static/API';
export default {
	name: "RecentProjectComponent",
	data () {
		return {
			images: []
		}
	},
	async created () {
		let response = await fetchProjects()
		if (response) {
			this.images = response
		}
	},
	computed: {

		sortImages () {
			this.images.sort((a,b) => {
				return a.id < b.id
			})
			this.images = this.images.slice(0, 12);
		},

		imagesWithBestFormats() {
			
			this.sortImages

			const preferredSizes = ['small', 'medium', 'large'];
			const reorderedSizes = ['small', 'medium', 'large'].filter(size => preferredSizes.includes(size));

			const imagesWithFormats = this.images.map(image => {
				const thumbnail = image.Thumbnail;
				const availableSize = reorderedSizes.find(size => thumbnail.formats[size]);
				return {
				id: image.id,
				bestFormatUrl: availableSize ? thumbnail.formats[availableSize].url : thumbnail.url,
				alt: image.Name
				};
			});
			return imagesWithFormats;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_colours";

.recent-projects {
	display: flex;
	padding: 0 5%;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 75px;
	background-color: #f6f6f6;
	padding-bottom: 124px;
	&__img {
		width: 40%;
		aspect-ratio: 1/1;
		margin: 2.5% 2.5%;
		display: block;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
}

@media (min-width: 600px) {
	.recent-projects {
		padding: 0 2% 124px 2%;
		flex-wrap: wrap;
		justify-content: none;
		&__img {
			width: 20%;
			margin: 2% 2.2%;
		}
	}
}

@media (min-width: 1000px) {
	.recent-projects {
		padding: 0 0;
		flex-wrap: wrap;
		padding: 0 2% 124px 2%;
		&__img {
			width: 17%;
			margin: 2% 4%;
			max-width: 200px;
		}
	}
}
</style>