<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/loan',
            customer: [],
            loanType: [],
            loanProposalAmount: [],
            loan: '',
            customerId: '',
            selectCustomer: '',
            selectLoanType: '',
            selectLoanProposalAmount: '',
            amount2: '',
            date: '',
            customerIdError:'',
            customerError: '',
            loanTypeError: '',
            loanProposalAmountError: '',
            amount2Error: '',
            dateError: ''

        }
    },
    mounted() {
        this.getcustomer();
        this.getloanType();
        this.getloanProposalAmount();
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
                    console.error('Error fetching Loan types', error);
                });

        },
        getloanProposalAmount() {
            axios.get('http://127.0.0.1:8000/api/loanProposal')
                .then(res => {
                    this.loanProposalAmount = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching Loan Proposal', error);
                });
        },
        saveLoan() {
            const data = {
                customer_id: this.customerId,
                customer_id: this.selectCustomer,
                loan_type_id: this.selectLoanType,
                loan_proprosal_id: this.selectLoanProposalAmount,
                amount: this.amount2,
                date: this.date,
            };
            axios.post(this.url, data)

            .then(res => {
                this.$router.push({name:'loan'});
            })
            .catch(error => {
                console.error('Error fetching Loan',error);
            });
        },
        clearErrors() {
                this.customerIdError,
                this.customerError,
                this.loanTypeError,
                this.loanProposalAmountError,
                this.amount2Error,
                this.dateError
        }
    },
}

</script>
<template>
    <main>
        <NavbarViewVue />
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Add Loan</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Customer ID</label>
                                        <input type="text" v-model="customerId" class="form-control" placeholder="Enter Customer ID">
                                        <p style="color: red;" v-if="customerIdError">{{ customerIdError }}</p>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Customer Name</label>
                                        <select v-model="selectCustomer" class="form-select col-md-10">
                                            <option value="">Customer Name</option>
                                            <option v-for="(d, i) in customer" :key="i" :value="d.id">
                                                {{ d.customer_name }}</option>
                                            <p style="color:red" v-if="customerError">{{ customerError }}</p>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                        <select v-model="selectLoanType" class="form-select col-md-10">
                                            <option value="">Loan Type </option>
                                            <option v-for="(d, i) in loanType" :key="i" :value="d.id">{{ d.loan_type }}
                                            </option>
                                            <p style="color:red" v-if="loanTypeError">{{ loanTypeError }}</p>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Loan Proposal Amount</label>
                                        <select v-model="selectLoanProposalAmount" class="form-select col-md-10">
                                            <option value="">Loan Proposal Amount </option>
                                            <option v-for="(d, i) in loanProposalAmount" :key="i" :value="d.id">
                                                {{ d.amount }}</option>
                                            <p style="color:red" v-if="loanProposalAmountError">{{
                                                loanProposalAmountError }}</p>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"> Amount</label>
                                        <input type="text" v-model="amount2" class="form-control"
                                            placeholder="Enter Amount">
                                        <p style="color: red;" v-if="amount2Error">{{ amount2Error }}</p>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Date</label>
                                        <input type="date" v-model="date" class="form-control" placeholder="Enter Date">
                                        <p style="color: red;" v-if="dateError">{{ dateError }}</p>
                                    </div>
                                </div>
                            </div>
                            <button @click="saveLoan" type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    </main>
</template>