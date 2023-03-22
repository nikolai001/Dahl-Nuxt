<template>
  <main>
    <small-header-component />
    <contact-component />
    <footer-component />
  </main>
</template>

<script>
import SmallHeaderComponent from '../components/SmallHeaderComponent.vue'
import ContactComponent from '~/components/ContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
// @ is an alias to /src

export default {
  name: 'About',
  components: {
    SmallHeaderComponent,
    FooterComponent,
    ContactComponent
  }
}
</script>

<style lang="scss">
  body {
    font-family: 'Noto Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
</style>