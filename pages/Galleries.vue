<template>
  <main>
    <small-header-component></small-header-component>
    <article class="gallery">
      <GalleryListComponent v-for="project in projects" :key="project.id" :project="project"></GalleryListComponent>
    </article>
    <footer-component></footer-component>
  </main>
</template>

<script>
import SmallHeaderComponent from '../components/SmallHeaderComponent.vue'
import GalleryListComponent from '../components/GalleryListComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { fetchProjects } from '@/static/API'
// @ is an alias to /src

export default {
  name: 'About',

  data() {
    return {
      projects: [],
    }
  },

  components: {
    SmallHeaderComponent,
    GalleryListComponent,
    FooterComponent
  },

  async created() {
    let response = await fetchProjects()
    if (response) {
      console.log(response)
      this.projects = response;
    }
  }
}
</script>

<style lang="scss">
  
  body {
    font-family: 'Noto Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  .gallery {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 600px) { 
    .gallery {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
</style>