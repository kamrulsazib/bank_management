<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default {
    components:{
        NavbarViewVue
    },
    data() {
        return{
            url: 'http://127.0.0.1:8000/api/cashDeposit',
            customer_id_list: '',
            customer_name: '',
            amount: '',
            date: '',
            customer_id_listError: '',
            amountError: '',
            dateError: '',
        }
    },
    mounted() {
        this.getCashDeposit();
    },
    methods: {
        getCashDeposit() {
            axios.get('http://127.0.0.1:8000/api/customer')
            .then(res => {
            this.customer_id_list = (res.data.data);
            })
        },
        saveDeposit() {
            axios.post(`${this.url}`, {
                customer_id: this.customer_name,
                amount: this.amount,
                date: this.date
            })
            .then(res =>{
                this.$router.push("/dashboard/cashDeposit")
            })
        },
    }
}
</script>

<template>
    <main>
        <NavbarViewVue/>
        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Cash Deposit Add</h4>
                        </div>
                        <div class="card-body">
                            <!-- <form @submit.prevent="handleSubmit"> -->
                                <div class="mb-3">
                                    <label for="customerid" class="form-label">Customer Name</label>
                                    <select class="form-select" v-model="customer_name"
                                        aria-label="Default select example">
                                        <option disabled value="">input customer name</option>
                                        <option v-for="(d, i) in customer_id_list" :key="i" :value="d.id">
                                            {{ d.customer_name }}</option>

                                    </select>
                                    <p style="color:red" v-if="customer_id_listError">
                                        {{ customer_id_listError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="payment" class="form-label">Cash Deposit Amount</label>
                                    <input type="number" v-model="amount" class="form-control" id="payment"
                                        placeholder="Enter payment amount">
                                    <p style="color:red" v-if="amountError">
                                        {{ amountError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="date" class="form-label">Date</label>
                                    <input type="date" v-model="date" class="form-control" id="date"
                                        placeholder="Enter date">
                                    <p style="color:red" v-if="dateError">
                                        {{ dateError }}
                                    </p>
                                </div>

                                <button type="submit" @click="saveDeposit" class="btn btn-primary">Submit</button>
                            <!-- </form> -->
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>
