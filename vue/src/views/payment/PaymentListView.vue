<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default {
    components:{
        NavbarViewVue
    },
    data() {
        return{
            url: 'http://127.0.0.1:8000/api/payment',
            payment: []
        }
    },
    mounted() {
        this.getPayment();
    },
    methods: {
        getPayment() {
            axios.get(`${this.url}`)
            .then(response => {
            this.payment = (response.data.data);
          })
        //   .catch(error => {
        //     console.error('Error fetching payment', error);
        //   });
        },
        paymentDelete(id) {
        axios.delete(`${this.url}/${id}`)
          .then(() => {
            this.getPayment();
            this.$router.push('/dashboard/payment');
          })
          .catch(error => {
            console.error('Error deleting payment', error);
          });
        },
        edit(id) {
        this.$router.push({ name: 'paymentEdit', params: { id: id } });
      }
    }
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
                        <h4 class="m-3 table_heading">Payment List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/paymentAdd" class="btn btn-warning">Add New</RouterLink>
                    </div>
                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Customer Name</th>
                            <th>Amount</th>
                            <th>Transaction No.</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(p, i) in payment" :key="p.id">
                            <td>{{ i + 1 }}</td>
                            <td>{{ p.customer.customer_name }}</td>
                            <td>{{ p.amount }}</td>
                            <td>{{ p.transaction_no }}</td>
                            <td>{{ p.date }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(p.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="paymentDelete(p.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>