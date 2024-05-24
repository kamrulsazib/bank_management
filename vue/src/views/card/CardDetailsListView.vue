<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default {
    components:{
        NavbarViewVue
    },
    data() {
        return{
            url: 'http://127.0.0.1:8000/api/card',
            card: []
        }
    },
    mounted() {
        this.getcard();
    },
    methods: {
        getcard() {
            axios.get(`${this.url}`)
            .then(response => {
            this.card = (response.data.data);
          })
        //   .catch(error => {
        //     console.error('Error fetching card', error);
        //   });
        },
        cardDelete(id) {
        axios.delete(`${this.url}/${id}`)
          .then(() => {
            this.getcard();
            this.$router.push({name:'cardDetails'});
          })
          .catch(error => {
            console.error('Error deleting card', error);
          });
        },
        edit(id) {
        this.$router.push({ name: 'editCardDetails', params: { id: id } });
      }
    }
}

</script>

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
                        <h4 class="m-3 table_heading">Card Details List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink :to="{name:'cardDetailsAdd'}" class="btn btn-warning">Add New</RouterLink>

                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Card Number</th>
                            <th>Customer</th>
                            <th>Card Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <!-- <tr>
                            <td>1</td>
                            <td>Visa Card</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2">Edit</button>
                                <button class="btn btn-danger btn-sm ">Delete</button>
                            </td>
                        </tr> -->
                         <tr v-for="(d, i) in card" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.name }}</td>
                            <td>{{ d.card_number }}</td>
                            <td>{{ d.customer.customer_name }}</td>
                            <td>{{ d.card_type.card_type }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="cardDelete(d.id)">Delete</button>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
    </main>

</template>