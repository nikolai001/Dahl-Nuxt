<template>
  <article class="contact-page">
    <div class="contact-page__employees">
      <employee-card-component v-for="employee in employees" :key="employee.id" :worker="employee"/>
    </div>
    <contact-map-component />
  </article>
</template>

<script>
import EmployeeCardComponent from './EmployeeCardComponent.vue'
export default {
    components: {
        EmployeeCardComponent
    },
    data () {
      return {
        employees: [
          {
            id: 1,
            name: "Nikolai Raahauge",
            phone: "29875651",
            job: "Web master"
          },
          {
            id: 2,
            name: "Svend Raahauge",
            phone: "40139420",
            job: "Afdelingsleder"
          }
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
  .contact-page {
    display: flex;
    flex-direction: column;
    &__employees {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
    }
  }
</style>