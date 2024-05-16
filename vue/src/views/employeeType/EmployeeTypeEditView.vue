<template>
    <main>
      <NavbarViewVue />
  
      <section class="main_content dashboard_part">
        <div class="container card mt-5 ms-2">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="card-header mt-5">
                <h4 class="table_heading">Employee Type Edit</h4>
              </div>
              <div class="card-body">
                <form @submit.prevent="handleSubmit">
                  <div class="mb-3">
                    <label for="employeeTypeInput" class="form-label">Employee Type</label>
                    <input type="text" v-model="employeeType" class="form-control" id="employeeTypeInput" placeholder="Enter Employee Type">
                    <p style="color: red">{{ employeeTypeError }}</p>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import NavbarViewVue from "../inc/NavbarView.vue";
  import axios from 'axios';
  
  export default {
    components: {
      NavbarViewVue
    },
    data() {
      return {
        url: 'http://127.0.0.1:8000/api/employeeType',
        employeeType: '',
        employeeTypeError: '',
        id: this.$route.params.id // Initialize id with route parameter
      };
    },
    mounted() {
      this.getEditData();
    },
    methods: {
      getEditData() {
        axios.get(`${this.url}/${this.id}/edit`)
          .then(res => {
            this.employeeType = res.data.data.employee_type;
          })
          .catch(error => {
            console.error('Error fetching Employee Type:', error);
          });
      },
      handleSubmit() {
        if (this.employeeType.length < 4) {
          this.employeeTypeError = 'Employee Type must be at least 4 characters long.';
          return; // Prevent submission if there's an error
        }
        axios.put(`${this.url}/${this.id}`,
         { employee_type: this.employeeType }) // Corrected property name
          .then(res => {
            console.log('Employee Type updated:', res.data);
            this.$router.push("/dashboard/employeeType");
          })
          .catch(error => {
            console.error('Error updating Employee Type:', error);
            // Provide user feedback here if needed
          });
      }
    }
  };
  </script>
  