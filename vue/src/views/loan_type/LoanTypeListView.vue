<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/loanType',
            loanType: []
        }
    },
    mounted() {
        this.getLoanType();
    },
    methods: {
        getLoanType() {
            axios.get('http://127.0.0.1:8000/api/loanType')
                .then(res => {
                    this.loanType = (res.data.data)
                })

        },
       
        loanTypeDelete(id) {
            axios.delete(`${this.url}/${id}`)
                .then(() => {
                    this.getLoanType();
                    this.$router.push('/dashboard/loanType');
                })
                .catch(error => {
                    console.error('Error deleting loan type:', error);
                });
        },
        edit(id) {
            this.$router.push({ name: 'editLoanType', params: { id: id } });
        },


    },
}

</script>

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
                        <h4 class="m-3 table_heading">Loan Type List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/loanTypeAdd" class="btn btn-warning">Add New</RouterLink>
                        
                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Loan Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d,i) in loanType" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{d.loan_type}}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="loanTypeDelete(d.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

</template>