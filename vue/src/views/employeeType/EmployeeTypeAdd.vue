<template>
  <main>
    <navbar-view-vue />

    <section class="main_content dashboard_part">
      <div class="container card mt-5 ms-2">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card-header mt-5">
              <h4 class="table_heading">Add Employee Type</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="employeeTypeInput" class="form-label">Employee Type</label>
                  <input type="text" v-model.trim="employeeType" class="form-control" id="employeeTypeInput" placeholder="Enter Employee Type">
                  <p v-if="employeeTypeError" class="text-danger">{{ employeeTypeError }}</p>
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
      employeeType: '',
      employeeTypeError: ''
    }
  },
  methods: {
    saveEmployeeType() {
      axios.post('http://127.0.0.1:8000/api/employeeType', {
        employee_type: this.employeeType
      })
      .then(res => {
        // console.log(res)
        this.$router.push("/dashboard/employeeType");
      })
      .catch(error => {
        console.error("Error adding employee type:", error);
      });
    },
    handleSubmit() {
      if (!this.employeeType) {
        this.employeeTypeError = 'Employee Type is required';
        return;
      } else if (this.employeeType.length < 4) {
        this.employeeTypeError = 'Employee Type must be at least 4 characters long';
        return;
      }
      this.saveEmployeeType();
    }
  },
}
</script>
