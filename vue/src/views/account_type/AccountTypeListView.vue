<template>
    <main>
        <NavbarViewVue />
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
                        <h4 class="m-3 table_heading">Account Type List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink :to="{name:'accountTypeAdd'}" class="btn btn-warning">Add New</RouterLink>
                        
                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>A/C Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in accountType" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.account_type }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="accountTypeDelete(d.id)">Delete</button>
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
            url: 'http://127.0.0.1:8000/api/accountType',
            accountType: []
        }
    },
    mounted() {
        this.getAccountType();
    },
    methods: {
        getAccountType() {
            axios.get('http://127.0.0.1:8000/api/accountType')
                .then(res => {
                    this.accountType = (res.data.data)
                })

        },
       
        accountTypeDelete(id) {
            axios.delete(`${this.url}/${id}`)
                .then(() => {
                    this.getAccountType();
                    this.$router.push({name:'accountType'});
                })
                .catch(error => {
                    console.error('Error deleting account type:', error);
                });
        },
        edit(id) {
            this.$router.push({ name: 'editAccountType', params: { id: id } });
        },


    },
    
}

</script>