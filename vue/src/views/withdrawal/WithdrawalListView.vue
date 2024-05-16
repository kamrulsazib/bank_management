<script>
  import NavbarViewVue from '../inc/NavbarView.vue';
  import axios from 'axios';
  
  export default {
    components: {
      NavbarViewVue
    },
    data() {
      return {
        url: 'http://127.0.0.1:8000/api/withdrawal',
        withdrawals: []
      }
    },
    mounted() {
      this.getWithdrawals();
    },
    methods: {
      getWithdrawals() {
        axios.get(`${this.url}`)
          .then(response => {
            this.withdrawals = response.data.data;
          })
          .catch(error => {
            console.error('Error fetching withdrawals', error);
          });
      },
      withdrawalDelete(id) {
        axios.delete(`${this.url}/${id}`)
          .then(() => {
            this.getWithdrawals();
            this.$router.push('/dashboard/withdrawal');
          })
          .catch(error => {
            console.error('Error deleting withdrawal', error);
          });
      },
      edit(id) {
        this.$router.push({ name: 'withdrawal edit', params: { id: id } });
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
            <h4 class="m-3 table_heading">Withdrawal List</h4>
          </div>
          <div class="col-md-6 text-end mt-2">
            <router-link to="/dashboard/withdrawalAdd" class="btn btn-warning">Add New</router-link>
          </div>
        </div>

        <table class="table table-striped">
          <thead class="table_color">
            <tr>
              <th>SL</th>
              <th>Customer Name</th>
              <th>Withdrawal Amount</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(w, i) in withdrawals" :key="w.id">
              <td>{{ i + 1 }}</td>
              <td>{{ w.customer.customer_name }}</td>
              <td>{{ w.deposit_amount }}</td>
              <td>{{ w.date }}</td>
              <td>
                <button class="btn btn-success btn-sm me-2" @click="edit(w.id)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="withdrawalDelete(w.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>
