<template>
    <main>
        <NavbarViewVue />
        <div class="container card mt-5 ms-2">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card-header mt-5">
                        <h4 class=" table_heading">Updated Loan Proposal</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">A/C Number</label>
                                    <input type="text" v-model="accountNumber" class="form-control"
                                        placeholder="Enter A/C Number">
                                    <p style="color:red" v-if="accountNumberError">{{ accountNumberError }}</p>
                                </div>
                                <div class="mb-3">

                                    <label for="exampleInputEmail1" class="form-label">Customer Name</label>
                                    <select v-model="selectCustomer" class="form-select col-md-10">
                                        <option value="">Customer Name</option>
                                        <option v-for="(d, i) in customer" :key="i" :value="d.id">{{ d.customer_name }}
                                        </option>
                                        <p style="color:red" v-if="customerError">{{ customerError }}</p>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                    <select class="form-select col-md-10" v-model="selectLoanType">
                                        <option disabled value=""> Please Select the Loan Type </option>
                                        <option v-for="(d, i) in loanType" :key="i" :value="d.id">{{ d.loan_type }}
                                        </option>
                                    </select>
                                    <p style="color:red" v-if="loanTypeError">{{ loanTypeError }}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Amount</label>
                                    <input type="text" v-model="amount" class="form-control"
                                        placeholder="Enter Loan Proposan Amount">
                                    <p style="color:red" v-if="amountError">{{ amountError }}</p>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">


                                    <label for="exampleInputEmail1" class="form-label">Date</label>
                                    <input v-model="date" type="date" class="form-control"
                                        placeholder="Enter Deposit Date">
                                    <p style="color:red" v-if="dateError">{{ dateError }}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"> Tenure(Month)</label>
                                    <input type="text" v-model="tenure" class="form-control" placeholder="Enter Amount">
                                    <p style="color:red" v-if="tenureError">{{ tenureError }}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Status</label>
                                    <!-- <input type="text" v-model="status" class="form-control" placeholder="Enter Amount"> -->
                                    <select v-model="status" class="form-control" name="" id="">
                                        <option value="success">success</option>
                                        <option value="pending">pending</option>
                                        <option value="cancel">cancel</option>
                                    </select>

                                    <p style="color:red" v-if="tenureError">{{ tenureError }}</p>
                                </div>
                            </div>
                        </div>
                        <button @click="updatedLoanProposal" type="submit" class="btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/loanProposal',
            customer: [],
            loanType: [],
            accountNumber: '',
            selectCustomer: '',
            selectLoanType: '',
            amount: '',
            date: '',
            tenure: '',
            loanPorosal: '',
            customerError: '',
            loanTypeError: '',
            amountError: '',
            dateError: '',
            tenureError: '',
            status: '',
            id: this.$route.params.id,


        }
    },
    mounted() {
        this.getcustomer();
        this.getloanType();
        this.getloanProposal();
    },
    methods: {
        getcustomer() {
            axios.get('http://127.0.0.1:8000/api/customer')
                .then(res => {
                    this.customer = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching customer', error);
                });
        },
        getloanType() {
            axios.get('http://127.0.0.1:8000/api/loanType')
                .then(res => {
                    this.loanType = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching loanType', error);
                });

        },
        getloanProposal() {
            const id = this.id
            axios.get(this.url + '/' + this.id + '/edit')
                .then((res) => {
                    const dt = res.data.data;
                    this.accountNumber= dt.customer.account_number 
                    this.selectCustomer = dt.customer_id;
                    this.selectLoanType = dt.loan_type_id;
                    this.amount = dt.amount;
                    this.date = dt.date;
                    this.tenure = dt.tenure
                    this.status = dt.status
                    console.log(dt);
                })
        },

        updatedLoanProposal() {
            const data = {
                customer_id: this.selectCustomer,
                loan_type_id: this.selectLoanType,
                amount: this.amount,
                date: this.date,
                tenure: this.tenure,
                status: this.status
            };
            axios.put(`${this.url}/${this.id}`, data)
                .then(res => {
                    this.$router.push({ name: 'loanProposal' });
                })
                .catch(error => {
                    console.error('Error fetching loanProposal', error);
                });

        },
    },
}

</script>