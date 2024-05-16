<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default{
    components: {
        NavbarViewVue
    },
    data() {
        return {

            url: 'http://127.0.0.1:8000/api/cashDeposit',
            deposit: []
        }
    },
    mounted() {
        this.getDeposit();
    },
    methods: {
        getDeposit() {
        axios.get(`${this.url}`)
          .then(response => {
            this.deposit = (response.data.data);
          })
          .catch(error => {
            console.error('Error fetching payment', error);
          });
      },
      depositDelete(id){
        axios.delete(`${this.url}/${id}`)
        .then(() => {
            this.getDeposit();
            this.$router.push('/dashboard/cashDeposit');
        })
        .catch(error => {
            console.error('Error deleting cashDeposit', error);
        });
      },
      edit(id) {
        this.$router.push({ name: 'paymentedit', params: { id: id } });
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
                        <h4 class="m-3 table_heading">Cash Deposit List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">

                        <button class="btn btn-warning">Add New</button>

                        <RouterLink to="/dashboard/cashDepositAdd" class="btn btn-warning">Add New</RouterLink>


                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Customer Name</th>
                            <th>Deposit Amount</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in deposit" :key="d.id">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.customer.customer_name }}</td>
                            <td>{{ d.amount }}</td>
                            <td>{{ d.date }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="depositDelete(d.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>