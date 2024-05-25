<template>
    <main>
        <NavbarViewVue/>
        
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
                        <h4 class="m-3 table_heading">Loan List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink :to="{name:'loanAdd'}" class="btn btn-warning">Add New</RouterLink>
                        
                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Customer ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Loan Type</th>
                            <th scope="col">Loan Proposal Amount</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d,i) in loan" :key="i">
                            <th>{{ i + 1 }}</th>
                            <th>{{d.customer_id}}</th>
                            <th>{{d.customer.customer_name}}</th>
                            <th>{{d.loan_type.loan_type}}</th>
                            <th>{{d.loan_proprosal.amount}}</th>
                            <th>{{d.amount}}</th>
                            <th>{{d.date}}</th>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="loanDelete(d.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
            url:'http://127.0.0.1:8000/api/loan',
            loan: []
        }
    },
    mounted() {
        this.getloan();
    },
    methods: {
        getloan() {
            axios.get(`${this.url}`)
                .then(res => {
                    this.loan = (res.data.data)
                    console.log (res.data.data)
                })

        },
        loanDelete(id){
            axios.delete(`${this.url}/${id}`)
            .then(()=> {
                this.getLoan();
                this.$router.push({name:'loan'});
            })
            .catch(error => {
                console.error('Error Deleting Loan!',error);
            });
        },
        edit(id) {
            this.$router.push({name: 'editLoan', params:{id:id}});
        },
    },
}

</script>