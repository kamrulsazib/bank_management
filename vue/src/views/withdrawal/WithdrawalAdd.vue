
<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default {
    components:{
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/withdrawal',
            customer_id_list: '',
            customer_name: '',
            deposit_amount: '',
            date: '',
            customer_id_listError: '',
            deposit_amountError: '',
            dateError: '',

        }
    },
    mounted() {
        this.getwithdrawal();
    },

    methods: {
        getwithdrawal() {
            axios.get('http://127.0.0.1:8000/api/customer')
                .then(res => {
                    this.customer_id_list = (res.data.data)
                })
        },

        savewithdrawSazib() {
            axios.post(`${this.url}`, {
                customer_id: this.customer_name,
                deposit_amount: this.deposit_amount,
                date: this.date
            })
            .then(res => {
                console.log(res)
                    this.$router.push("/dashboard/withdrawal")
                })
        },

    },
    // watch: {
    //     'expense': function () {
    //         if (this.expense.length < 1) {
    //             this.expenseError = 'Expense Category Required'
    //         } else {
    //             this.expenseError = ''
    //         }
    //     }
    // }
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
                            <h4 class="table_heading">Withdrawal Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
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
                                    <label for="date" class="form-label">Withdrawal Amount</label>
                                    <input type="number" v-model="deposit_amount" class="form-control" id="withdrawal"
                                        placeholder="Enter withdrawal amount">
                                    <p style="color:red" v-if="deposit_amountError">
                                        {{ deposit_amountError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="date" class="form-label">Date</label>
                                    <input type="date" v-model="date" class="form-control" id="date"
                                        placeholder="Enter Your date">
                                    <p style="color:red" v-if="dateError">
                                        {{ dateError }}
                                    </p>
                                </div>

                                <button type="submit" @click="savewithdrawSazib" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>
