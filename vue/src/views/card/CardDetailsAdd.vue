<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/payment',
            customer_id_list: '',
            customer_name: '',
            payment_amount: '',
            transaction_no: '',
            date: '',
            customer_id_listError:'',
            payment_amountError:'',
            transaction_noError:'',
            dateError:''

        }
    },
    mounted() {
        this.getpayment();
    },
    methods: {
        getpayment() {
            axios.get('http://127.0.0.1:8000/api/customer')
            .then(res => {
                this.customer_id_list = (res.data.data)
            })
        },
        savepayment() {
            axios.post(`${this.url}`, {
                customer_id: this.customer_name,
                amount: this.payment_amount,
                transaction_no: this.transaction_no,
                date: this.date
            })
            .then(res =>{
                //console.log(res)
                this.$router.push({name:'payment'})
            })
        },
    },
//     watch: {
//         payment: function () {
//       if (this.payment.length < 4) {
//         this.paymentError = "Payment Required";
//       } else {
//         this.paymentError = "";
//       }
//     },
// },
}
</script>


<template>
    <main>
        <NavbarViewVue/>
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Payment List Add</h4>
                        </div>
                        <div class="card-body">
                            <!-- <form @submit.prevent="handleSubmit">  -->
                                <div class="mb-3">
                                    <label for="customerid" class="form-label">Customer Name</label>
                                    <select class="form-select" v-model="customer_name"
                                        aria-label="Default select example">
                                        <option disabled value="">input customer name</option>
                                        <option v-for="(p, i) in customer_id_list" :key="i" :value="p.id">
                                            {{ p.customer_name }}</option>

                                    </select>
                                    <p style="color:red" v-if="customer_id_listError">
                                        {{ customer_id_listError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="payment" class="form-label">Payment Amount</label>
                                    <input type="number" v-model="payment_amount" class="form-control" id="payment"
                                        placeholder="Enter payment amount">
                                    <p style="color:red" v-if="payment_amountError">
                                        {{ payment_amountError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="payment" class="form-label">Transaction No.</label>
                                    <input type="text" v-model="transaction_no" class="form-control" id="transaction"
                                        placeholder="Enter transaction no">
                                    <p style="color:red" v-if="transaction_noError">
                                        {{ transaction_noError }}
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

                                <button type="submit" @click="savepayment" class="btn btn-primary">Submit</button>
                            <!-- </form> -->
                        </div>
                    </div>
                </div>
            </div>
    </main>
</template>