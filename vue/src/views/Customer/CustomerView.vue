<script>
import NavbarView from '../inc/NavbarView.vue';
import axios from 'axios'
export default {
    components: {
        NavbarView
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/customer',
            customer: []
        }
    },
    mounted() {
        // console.log('this test')
        this.getCustomer();
    },
    methods: {
        getCustomer() {
            axios.get(`${this.url}`)
                .then(res => {
                    this.customer = (res.data.data)
                    console.log(res.data.data)
                })

        },

        // accountTypeDelete(id) {
        //     axios.delete(`${this.url}/${id}`)
        //         .then(() => {
        //             this.getAccountType();
        //             this.$router.push('/dashboard/accountType');
        //         })
        //         .catch(error => {
        //             console.error('Error deleting account type:', error);
        //         });
        // },
        // edit(id) {
        //     this.$router.push({ name: 'editAccountType', params: { id: id } });
        // },


    },
}
</script>

<template>
    <main>
        <NavbarView />
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
                        <h4 class="m-3 table_heading">Customer List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink :to="{name:'customerAdd'}" class="btn btn-warning">Add New</RouterLink>

                    </div>

                </div>

                <table class="table table-striped table-responsive">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Account Number</th>
                            <th>Photo</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>NID</th>
                            <th>Date of Birth</th>
                            <th>Account Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in customer" :key="i">
                            <th>{{ ++i }}</th>
                            <td>{{ d.account_number }}</td>
                            <td> <img height="50px" :src="`http://127.0.0.1:8000/storage/${d.photo}`"  alt=""></td>
                            
                            <td>{{ d.customer_name }}</td>
                            <td>{{ d.email }}</td>
                            <td>{{ d.mobile }}</td>
                            <td>{{ d.address }}</td>
                            <td>{{ d.nid_number }}</td>
                            <td>{{ d.date_of_birth }}</td>
                            <td>{{ d.account_type.account_type }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>&nbsp;
                                <button class="btn btn-danger btn-sm" @click="accountTypeDelete(d.id)">Delete</button>
                           
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </main>
</template>
