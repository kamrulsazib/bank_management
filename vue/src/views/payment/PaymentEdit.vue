
<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios';

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/payment',
            customer_id: '',
            amount: '',
            transaction_no: '',
            date: '',  
            payment_list: [],
            customer_idError:'',
            amountError: '',
            transaction_noError: '',
            dateError: '',
            id: this.$route.params.id
        }
    },

    methods: {
        getEmployeeType() {
            axios.get('http://127.0.0.1:8000/api/customer')
                .then(res => {
                    const getData = res.data.data;
                    this.payment_list = getData;
                })
                .catch(error => {
                    console.error('Error fetching employee types:', error);
                });
        },
        getEmployee() {
            const id = this.id
            axios.get(this.url + '/' + this.id + '/edit')
                .then((res) => {
                    const dt = res.data.data;
                    this.amount = dt.amount;
                    this.transaction_no = dt.transaction_no;
                    this.date = dt.date;
                    this.customer_id = dt.customer_id;

                    //console.log(dt.expense_category_id);
                })
        },

        updatePayment() {
            const aldata = {
                amount: this.amount,
                transaction_no: this.transaction_no,
                date: this.date,
                customer_id: this.customer_id
                
            };
            axios.put(`${this.url}/${this.id}`, aldata)
                .then(res => {
                    this.$router.push("/dashboard/payment");
                })
                .catch(error => {
                    console.error('Error updating employee:', error);
                });
        },
        // clearErrors() {
        //     this.amountError = '';
        //     this.transaction_noError = '';
        //     this.dateError = '';
        //     this.employeeTypeError = '';
        // }
    },
    mounted() {
        this.getEmployeeType();
        this.getEmployee();
    },
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
                            <h4 class="table_heading">Payment List Add</h4>
                        </div>
                            <div class="card-body">
                                <!-- <form @submit.prevent="handleSubmit">  -->
                                <div class="mb-3">
                                    <label for="customerid" class="form-label">Customer Name</label>
                                    <select class="form-select" v-model="customer_id"
                                        aria-label="Default select example">
                                        <option disabled value="">input customer name</option>
                                        <option v-for="(p, i) in payment_list" :key="i" :value="p.id">
                                            {{ p.customer_name }}</option>

                                    </select>
                                    <p style="color:red" v-if="customer_idError">
                                        {{ customer_idError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="payment" class="form-label">Payment Amount</label>
                                    <input type="number" v-model="amount" class="form-control" id="payment"
                                        placeholder="Enter payment amount">
                                    <p style="color:red" v-if="amountError">
                                        {{ amountError }}
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

                                <button type="submit" @click="updatePayment" class="btn btn-primary">Submit</button>
                            <!-- </form> -->
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>