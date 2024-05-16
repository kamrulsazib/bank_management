<template>
    <main>
        <NavbarViewVue/>
        <section class="main_content dashboard_part">
            <div class="container card card-body mt-5 ms-2">
                <div class="row">
                    <div class="col-md-4">
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h4 class="m-3 table_heading">Employee List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/employeeadd" class="btn btn-warning">Add New</RouterLink>
                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Employee Name</th>
                            <th>Mobile </th>
                            <th>Email </th>
                            <th>Employee Type </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in employee" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.employee_name}}</td>
                            <td>{{ d.mobile}}</td>
                            <td>{{ d.email}}</td>
                            <td>{{ d.employee_type.employee_type}}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="employeeDelete(d.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

</template>



<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/employee',
            employee: []
        }
    },
    mounted() {
        this.getemployee();
    },
    methods: {
        getemployee() {
            axios.get(`${this.url}`)
            .then((result) => {
                    this.employee = (result.data.data);
                    //console.log(result.data.data);
                })

        },
       
        employeeDelete(id) {
            axios.delete(`${this.url}/${id}`)
                .then(() => {
                    this.getemployee();
                    this.$router.push('/dashboard/employee');
                })
                .catch(error => {
                    console.error('Error deleting employee !', error);
                });
        },
        edit(id) {
            this.$router.push({ name: 'employeeEdit', params: { id: id } });
        },


    },
    
}

</script>