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
                        <h4 class="m-3 table_heading">Employee Type List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/employeeTypeadd" class="btn btn-warning">Add New</RouterLink>

                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Employee Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in employeeType" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.employee_type}}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="employeeTypeDelete(d.id)">Delete</button>
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
            url: 'http://127.0.0.1:8000/api/employeeType',
            employeeType: []
        }
    },
    mounted() {
        this.getemployeeType();
    },
    methods: {
        getemployeeType() {
            axios.get(`${this.url}`)
            .then((result) => {
                    this.employeeType = (result.data.data);
                    //console.log(result.data.data);
                })

        },
       
        employeeTypeDelete(id) {
            axios.delete(`${this.url}/${id}`)
                .then(() => {
                    this.getemployeeType();
                    this.$router.push('/dashboard/employeeType');
                })
                .catch(error => {
                    console.error('Error deleting Employee Type:', error);
                });
        },
        edit(id) {
            this.$router.push({ name: 'employeeTypeEdit', params: { id: id } });
        },


    },
    
}

</script>