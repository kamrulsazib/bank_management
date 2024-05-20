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
                    // console.log(res.data.data)
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
                        <h4 class="m-3 table_heading">Customer List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/accountTypeAdd" class="btn btn-warning">Add New</RouterLink>

                    </div>

                </div>

                <table class="table table-striped table-responsive">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>NID Number</th>
                            <th>Date of Birth</th>
                            <th>Nominee Name</th>
                            <th>Nominee Phone</th>
                            <th>Nominee NID</th>
                            <th>Document</th>
                            <th>Account Type</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in customer" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.customer_name }}</td>
                            <td>{{ d.email }}</td>
                            <td>{{ d.mobile }}</td>
                            <td>{{ d.address }}</td>
                            <td>{{ d.photo }}</td>
                            <td>{{ d.nid_number }}</td>
                            <td>{{ d.date_of_birth }}</td>
                            <td>{{ d.nominee_name }}</td>
                            <td>{{ d.nominee_mobile }}</td>
                            <td>{{ d.nominee_nid_number }}</td>
                            <td>{{ d.document }}</td>
                            <td>{{ d.account_type_id }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="accountTypeDelete(d.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>
