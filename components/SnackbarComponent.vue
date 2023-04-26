<template>
  <div class="snackbar" :class="{'snackbar--toggled':toggled}">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
    props: {
        message: String,
        duration: Number
    },

    data () {
        return {
            toggled: false
        }
    },

    created () {
        this.$nuxt.$on('sent', () => {
            this.toggled = true
            setTimeout(() => {
                this.toggled = false;
            }, this.duration);
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/assets/_collections';
    .snackbar {
        top: 0;
        bottom: 25px;
        left: 0;
        right: 0;
        position: fixed;
        margin: auto auto 0 auto;
        width: 50%;
        height: fit-content;
        background-color: $blue;
        @include paragraph($white,$paragraph);
        text-align: center;
        max-width: 175px;
        padding: 10px 2%;
        border-radius: $primary-border;
        box-shadow: $el-2;
        transform: translateX(-100vw);
        transition: $transition;
        z-index: 10;
        &--toggled {
            transform: translateX(0px);
        }
    }
    @media (min-width: 600px) {
        .snackbar {
            width: 30%;
            @include paragraph($white,$paragraph--desktop);
            max-width: 185px;
            padding: 10px 5px;
            bottom: 0;
            margin: 10px 0 auto 20px;
            &--toggled {
                transform: translateX(0px);
            }
        }
    }

    @media (min-width: 1000px) {
        .snackbar {
        bottom: 180px;
        &--toggled {
            transform: translateX(0px);
        }
    }
}
        
</style>