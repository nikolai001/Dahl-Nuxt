<template>
  <article>
    <employee-card-component v-for="employee in employees" :key="employee.id" :worker="employee"/>
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

<style>

</style>