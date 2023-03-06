<template>
	<div class="recent-projects">
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/smallimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/smallimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/tempimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/tempimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/tempimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/tempimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/tempimg.png"
		/>
		<img
			class="recent-projects__img"
			alt="Image placeholder"
			src="../assets/tempimg.png"
		/>
	</div>
</template>

<script>
export default {
	name: "RecentProjectComponent",
	props: {},
	computed: {},
	methods: {},
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
		width: 40vw;
		height: 40vw;
		margin: 2.5% 2.5%;
		display: block;
		object-fit: cover;
	}
}

@media (min-width: 600px) {
	.recent-projects {
		padding: 0 2% 124px 2%;
		flex-wrap: wrap;
		justify-content: none;
		&__img {
			width: 19vw;
			height: 19vw;
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
			width: 16vw;
			height: 16vw;
			margin: 2% 4%;
		}
	}
}
</style>