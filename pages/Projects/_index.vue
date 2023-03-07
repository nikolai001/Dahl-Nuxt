<template>
  <main>
    <small-header-component></small-header-component>
    <p>This is project {{this.$route.params.index}}</p>
    <footer-component></footer-component>
  </main>
</template>

<script>

import SmallHeaderComponent from '@/components/SmallHeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
// @ is an alias to /src

export default {
  name: 'Project',
  components: {
    SmallHeaderComponent,
    FooterComponent
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