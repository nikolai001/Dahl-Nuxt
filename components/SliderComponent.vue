<template>
	<div class="slider">
		<div class="slider__image" :style="{backgroundImage: 'url(' + require('@/assets/temp_img.jpg') + ')'}">
        <div class="slider__progress">
            <button class="progress__button" @click="slideProgress('prev')">&lt;</button>
            <button class="progress__button" @click="slideProgress('next')">&gt;</button>
        </div>
            <p class="image__indicator">{{currentImage}}/{{maxImage}}</p>
        </div>
        <p class="slider__text">{{images[currentImage-1].description + ' ' + images[currentImage-1].id}}</p>
	</div>
</template>

<script>
export default {
	name: "GalleryListComponent",
	props: {
		project : {
			images: Array
		}
	},
    data () {
        return {
            currentImage: 1,
            maxImage: 5,
            images: [
                {
                    id: 1,
                    description: "Picture test"
                },
                {
                    id: 2,
                    description: "Picture test"
                },
                {
                    id: 3,
                    description: "Picture test"
                },
                {
                    id: 4,
                    description: "Picture test"
                },
                {
                    id: 5,
                    description: "Picture test"
                }
            ]
        }
    },
	methods: {
        slideProgress(Direction) {
            if (Direction !== 'next') {
                if (this.currentImage !== 1) {
                    this.currentImage--
                    return
                }
                this.currentImage = 5;
                return
            }
            if (this.currentImage !== this.maxImage) {
                this.currentImage++
                return
            }
            this.currentImage = 1;
            return
        }
    },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";

.slider {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 10px auto;
    box-shadow: $el-1;
    border-radius:12px;
    &__text {
        width: 100%;
        background-color: $background-white;
        border-radius: 0 0 12px 12px;
        min-height: 40px;
        text-align: left;
        box-sizing: border-box;
        margin: auto 0;
        padding: 5px 5px;
    }
    &__progress {
        width: 100%;
        display: flex;
        grid-row: 1/span 1;
        justify-content: space-between;
        grid-column: 1/2;
        align-self: center;
        margin: 0;
        padding: 0 5px;
        box-sizing: border-box;
        .progress__button {
            border-radius: 100em;
            background-color: $cta-blue;
            border: none;
            width:8%;
            color: $background-white;
            cursor: pointer;
            box-shadow: $el-1;
            padding: 0;
            aspect-ratio: 1/1;
        }
    }
    &__image {
        background-color: $grey;
        width: 100%;
        aspect-ratio: 16/9;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 100%;
        border-radius: 12px 12px 0 0;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        .image__indicator {
            margin: 0 auto;
            text-align: center;
            align-self: flex-start;
            grid-row: 1/span 1;
            grid-column: 1/2;
            color: $cta-blue;
            justify-self: end;
            background-color: $background-white;
            width: 10%;
            min-width: 35px;
            padding: 2px;
            border-radius: 0 12px 0 12px;
            margin: 0 auto 0 0;
            box-shadow: $el-1;
        }
    }
}


@media (min-width: 600px) {
	
}

@media (min-width: 750px) {
	
}

@media (min-width: 1000px) {
	
}
</style>