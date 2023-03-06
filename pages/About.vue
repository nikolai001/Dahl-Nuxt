<template>
  <main>
    <small-header-component></small-header-component>
    <about-component></about-component>
    <RecentProjectsComponent></RecentProjectsComponent>
    <footer-component></footer-component>
  </main>
</template>

<script>
import SmallHeaderComponent from '../components/SmallHeaderComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import RecentProjectsComponent from '../components/RecentProjectsComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
// @ is an alias to /src

export default {
  name: 'About',
  components: {
    SmallHeaderComponent,
    AboutComponent,
    RecentProjectsComponent,
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