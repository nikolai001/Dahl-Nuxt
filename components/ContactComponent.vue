<template>
  <article class="contact-page">
    <h1 class="contact-page__headline">Hovednummber <br> +45 54 92 19 99</h1>
    <div class="contact-page__employees">
      <employee-card-component v-for="employee in employees" :key="employee.id" :worker="employee"/>
    </div>
    <contact-map-component />
  </article>
</template>

<script>
import { fetchEmployees } from '@/static/API'
import EmployeeCardComponent from './EmployeeCardComponent.vue'
export default {
    components: {
        EmployeeCardComponent
    },
    data () {
      return {
        employees: []
      }
    },

    async created () {
      let response = await fetchEmployees()
      .catch(err => {
			  return
		  })
      if (response) {
        this.employees = response
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "./assets/scss/assets/_collections";
  .contact-page {
    display: flex;
    flex-direction: column;
    &__headline {
      @include headline;
      text-align: center;
      margin: 95px 0 65px 0;
    }
    &__employees {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto 85px auto;
    }
  }

  @media (min-width: 600px) {
    .contact-page {
      &__headline {
        @include headline(null, $headline--desktop);
      }
    }
  }
</style>