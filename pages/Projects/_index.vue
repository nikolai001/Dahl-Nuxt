<template>
  <main>
    <small-header-component></small-header-component>
    <ProjectComponent />
    <footer-component></footer-component>
  </main>
</template>

<script>

import SmallHeaderComponent from '@/components/SmallHeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
// @ is an alias to /src

export default {
  name: 'Project',
  components: {
    SmallHeaderComponent,
    ProjectComponent,
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