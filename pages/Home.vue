<template>
  <main>
    <header-component></header-component>
    <info-component></info-component>
    <RecentProjectsComponent></RecentProjectsComponent>
    <footer-component></footer-component>
  </main>
</template>

<script>
// @ is an alias to /src

import HeaderComponent from '@/components/HeaderComponent.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import RecentProjectsComponent from '@/components/RecentProjectsComponent.vue'


export default {
  name: 'Home',
  components: {
    HeaderComponent,
    InfoComponent,
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
