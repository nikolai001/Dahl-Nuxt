<template>
	<div class="gallery__project">
		<div class="project__thumbnail" :style="{ backgroundImage: 'url('+ $config.baseUrl + returnedImage.img +')' }">
			<div class="thumbnail__banner">DAHL</div>
		</div>
		<p class="project__title">{{project.Name}}</p>
		<p class="project__description">{{project.Description}}</p>
		<nuxt-link class="project__cta" :to="'projects/'+project.id">Se billeder</nuxt-link>
	</div>
</template>

<script>
export default {
	name: "GalleryListComponent",
	props: {
		project : {}
	},
	computed: {
		returnedImage () {

			const preferredSizes = ['large', 'medium', 'thumbnail'];

			const reorderedSizes = ['large', 'medium', 'thumbnail'].filter(size => preferredSizes.includes(size));

			const thumbnail = this.project.Thumbnail

			const availableSize = reorderedSizes.find(size => thumbnail.formats[size]);

			console.log(thumbnail.formats[availableSize])
			if (availableSize) {
				return {img: thumbnail.formats[availableSize].url};
			} else {
				return {img: thumbnail.url};
			}
		}
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";

.gallery__project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	width: 80%;
	padding: 0;
	background-color: $white;
	box-shadow: $el-2;
	border-radius: 12px 12px 12px 12px;
	margin: 50px auto;
	max-width: 400px;
	&:nth-child(1) {
		margin:50px auto 0 auto;
	}
	.project__thumbnail { 
		width: 100%;
		max-height: 200px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		aspect-ratio: 16 / 9;
		border-radius: $primary-border $primary-border 0 0;
		overflow: hidden;
		.thumbnail__banner {
			background-color: $cta-blue;
			position: relative;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			width:35%;
			max-width:94px;
			min-width:80px;
			text-align: center;
			@include paragraph($background-white,null);
			margin: 0 0 0 auto;
			transform: translateX(25%) translateY(50%) rotate(45deg);
			box-shadow: $el-1;
		}
	}

	.project__cta {
		background-color: $cta-blue;
		@include paragraph($background-white, $paragraph--desktop);
		border: none;
		border-radius: $rounded-border;
		padding: 8px 10px;
		margin: 14px 22px 24px auto;		
		cursor: pointer;
		box-shadow: $el-1;
		transition: $transition;
		text-decoration: none;
		&:hover {
			box-shadow: $el-2;
			transform: $scale-el-2;
		}
	}

	.project__title {
		margin: 20px auto 24px auto;
		text-align: center;
		@include paragraph(black, clamp($paragraph--desktop,$paragraph,18px));
	}

	.project__description {
		padding: 0 24px;
		@include paragraph(black, clamp($paragraph--desktop,$paragraph,18px));
	}

}

@media (min-width: 600px) {
	.gallery__project {
		flex-wrap: wrap;
		max-width: 350px;
		margin: 25px 25px;
		&:nth-child(1) {
			margin: 25px 0;
		}

		.project__title {
			margin: 20px auto 24px auto;
			text-align: center;
			@include paragraph(black, $paragraph--desktop); 
		}

		.project__description {
			@include paragraph(black, $paragraph--desktop);
		}
	}
}

@media (min-width: 750px) {
	.gallery__project {
		flex-wrap: wrap;
		max-width: 350px;
		margin: 25px 0;
	}
}

@media (min-width: 1000px) {
	.gallery__project {
		padding: 0 0;
		flex-wrap: wrap;
	}
}
</style>