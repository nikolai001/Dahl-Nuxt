<template>
	<div class="gallery__project">
		<div class="project__thumbnail" :style="{ backgroundImage: 'url(' + require('@/assets/temp_img.jpg') + ')' }">
			<div class="thumbnail__banner">DAHL</div>
		</div>
		<p class="project__title">{{project.name}}</p>
		<p class="project__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
		<nuxt-link class="project__cta" :to="'projects/'+project.id">Se billeder</nuxt-link>
	</div>
</template>

<script>
export default {
	name: "GalleryListComponent",
	props: {
		project : {
			id: Number,
			name: String,
			img: String
		}
	},
	computed: {},
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
			color: $background-white;
			margin: 0 0 0 auto;
			transform: translateX(25%) translateY(50%) rotate(45deg);
			box-shadow: $el-1;
		}
	}

	.project__cta {
		background-color: $cta-blue;
		color: $background-white;
		border: none;
		border-radius: $rounded-border;
		font-size: 14px;
		padding: 8px 10px;
		margin: 14px 22px 24px auto;		
		cursor: pointer;
		box-shadow: $el-1;
		transition: $transition;
		&:hover {
			box-shadow: $el-2;
			transform: $scale-el-2;
		}
	}

	.project__title {
		margin: 20px auto 24px auto;
		text-align: center;
	}

	.project__description {
		padding: 0 24px;
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