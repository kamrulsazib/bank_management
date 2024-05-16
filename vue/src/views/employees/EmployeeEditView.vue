<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Employee Update</h4>
                        </div>
                        <div class="card-body">
                            <!-- <form @submit.prevent="handleSubmit"> -->

                                <div class="mb-3">
                                    <label for="employee_name" class="form-label">Employee Name</label>
                                    <input type="text" v-model.trim="employee_name" class="form-control"
                                        id="employee_name" placeholder="Enter Employee Name">
                                    <!-- <p style="color:red" v-if="employee_nameError">{{ employee_nameError }}</p> -->
                                </div>

                                <div class="mb-3">
                                    <label for="mobile" class="form-label">Mobile</label>
                                    <input type="text" v-model.trim="mobile" class="form-control" id="mobile"
                                        placeholder="Enter Mobile Number">
                                    <!-- <p style="color:red" v-if="mobileError">{{ mobileError }}</p> -->
                                </div>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" v-model.trim="email" class="form-control" id="email"
                                        placeholder="Enter Email">
                                    <!-- <p style="color:red" v-if="emailError">{{ emailError }}</p> -->
                                </div>

                                <div class="mb-3">
                                    <label for="employeeType" class="form-label">Employee Type</label>
                                    <select v-model="employee_type_id" class="form-select" id="employeeType">
                                        <option value="0">Please select an Employee Type</option>
                                        <option v-for="(d, i) in employee_type_list" :key="i" :value="d.id">
                                            {{ d.employee_type }}</option>
                                    </select>
                                    <!-- <p style="color:red" v-if="employeeTypeError">{{ employeeTypeError }}</p> -->
                                </div>

                                <button type="submit" @click="updateEmployee" class="btn btn-primary">Submit</button>
                            <!-- </form> -->
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
            url: 'http://127.0.0.1:8000/api/employee',
            employee_name: '',
            mobile: '',
            email: '',
            employee_type_id: '',
            employee_type_list: [],
            mobileError: '',
            emailError: '',
            employeeTypeError: '',
            id: this.$route.params.id
        }
    },

    methods: {
        getEmployeeType() {
            axios.get('http://127.0.0.1:8000/api/employeeType')
                .then(res => {
                    const getData = res.data.data;
                    this.employee_type_list = getData;
                })
                .catch(error => {
                    console.error('Error fetching employee types:', error);
                });
        },
        getEmployee() {
            const id = this.id
            axios.get(this.url + '/' + this.id + '/edit')
                .then((res) => {
                    const dt = res.data.data;
                    this.employee_name = dt.employee_name;
                    this.mobile = dt.mobile;
                    this.email = dt.email;
                    this.employee_type_id = dt.employee_type_id;

                    //console.log(dt.expense_category_id);
                })
        },

        updateEmployee() {
            const aldata = {
                employee_name: this.employee_name,
                mobile: this.mobile,
                email: this.email,
                employee_type_id: this.employee_type_id
                
            };
            axios.put(`${this.url}/${this.id}`, aldata)
                .then(res => {
                    this.$router.push("/dashboard/employee");
                })
                .catch(error => {
                    console.error('Error updating employee:', error);
                });
        },
        // clearErrors() {
        //     this.employee_nameError = '';
        //     this.mobileError = '';
        //     this.emailError = '';
        //     this.employeeTypeError = '';
        // }
    },
    mounted() {
        this.getEmployeeType();
        this.getEmployee();
    },
}
</script>
