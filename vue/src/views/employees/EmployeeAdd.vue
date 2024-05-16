<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Employee Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">

                                <div class="mb-3">
                                    <label for="employee_name" class="form-label">Employee Name</label>
                                    <input type="text" v-model.trim="employee_name" class="form-control" id="employee_name"
                                        placeholder="Enter Employee Name">
                                    <p style="color:red" v-if="employee_nameError">{{ employee_nameError }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="mobile" class="form-label">Mobile</label>
                                    <input type="text" v-model.trim="mobile" class="form-control" id="mobile"
                                        placeholder="Enter Mobile Number">
                                    <p style="color:red" v-if="mobileError">{{ mobileError }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" v-model.trim="email" class="form-control" id="email"
                                        placeholder="Enter Email">
                                    <p style="color:red" v-if="emailError">{{ emailError }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="employeeType" class="form-label">Employee Type</label>
                                    <select v-model="selectedEmployeeType" class="form-select" id="employeeType">
                                        <option disabled value="">Please select an Employee Type</option>
                                        <option v-for="type in employeeType" :key="type.id" :value="type.id">{{ type.employee_type }}</option>
                                    </select>
                                    <p style="color:red" v-if="employeeTypeError">{{ employeeTypeError }}</p>
                                </div>

                                <button type="submit" @click="saveEmployee" class="btn btn-primary">Submit</button>
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
            url: 'http://127.0.0.1:8000/api/employee',
            employee_name: '',
            mobile: '',
            email: '',
            selectedEmployeeType: '',
            employeeType: [],
            employee_nameError: '',
            mobileError: '',
            emailError: '',
            employeeTypeError: ''
        }
    },
    mounted() {
        this.getEmployeeType();
    },
    methods: {
        getEmployeeType() {
            axios.get('http://127.0.0.1:8000/api/employeeType')
                .then(res => {
                    this.employeeType = res.data.data;
                })
                .catch(error => {
                    console.error('Error fetching employee types:', error);
                });
        },
        // handleSubmit() {
        //     if (!this.employee_name) {
        //         this.employee_nameError = 'Employee Name is required';
        //         return;
        //     }
        //     if (!this.mobile) {
        //         this.mobileError = 'Mobile is required';
        //         return;
        //     }
        //     if (!this.email) {
        //         this.emailError = 'Email is required';
        //         return;
        //     }
        //     if (!this.selectedEmployeeType) {
        //         this.employeeTypeError = 'Employee Type is required';
        //         return;
        //     }
            
        //     // Clearing any previous errors
        //     this.clearErrors();

        //     // Submit the form
        //     this.saveEmployee();
        // },
        saveEmployee() {
            const data={
                employee_name: this.employee_name,
                mobile: this.mobile,
                email: this.email,
                employee_type_id: this.selectedEmployeeType
            };
            axios.post(this.url, data)
            .then(res => {
                this.$router.push("/dashboard/employee");
            })
            .catch(error => {
                console.error('Error adding employee:', error);
            });
        },
        clearErrors() {
            this.employee_nameError = '';
            this.mobileError = '';
            this.emailError = '';
            this.employeeTypeError = '';
        }
    }
}
</script>
