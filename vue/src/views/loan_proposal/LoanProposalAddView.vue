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
            // selectCustomer: '',
            selectLoanType: '',
            amount: '',
            date: '',
            tenure:'',
            cusid:'',
            loanPorposal: '',
            accountNumberError: '',
            customerError: '',
            loanTypeError: '',
            amountError: '',
            dateError: '',
            tenureError: '',
            // cusName:"",


        }
    },
    mounted() {
        this.getcustomer();
        this.getloanType();
    },
    methods: {
    getwithnumber(e){
        const num= e.target.value;
         const acnum= this.customer.find(item=>item.account_number==num)
        if(num!="" && acnum!=""){
             //console.log(acnum);
            this.cusid=acnum.id;
            this.cusName=acnum.customer_name;
        }
    },
        getcustomer() {
            axios.get('http://127.0.0.1:8000/api/customer')
                .then(res => {
                    this.customer = (res.data.data)
                    console.log(res.data.data)
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

        saveLoanProposal() {
            const allData = {
                account_number: this.accountNumber,
                customer_id: this.cusid,
                // customer_id: this.selectCustomer,
                loan_type_id: this.selectLoanType,
                amount: this.amount,
                date: this.date,
                tenure: this.tenure
            };
            axios.post(this.url, allData)
            .then(res => {
                this.$router.push({name:'loanProposal'});
            })
            .catch(error => {
                console.error('Error fetching loanProposal',error);
            });

        },

        clearErrors() {
                this.accountNumberError,
                // this.customerError,
                this.loanTypeError,
                this.amountError,
                this.dateError,
                this.tenureError
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
                            <h4 class=" table_heading">Add Loan Proposal</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Customer Name</label>
                                    <!-- <input type="text" v-model="cusid" class="form-control" value="cusname"
                                        placeholder="Customer Name"> -->
                                    <select v-model="cusid" class="form-select col-md-10" readonly>
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
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Amount</label>
                                    <input type="number" v-model="amount" class="form-control"
                                        placeholder="Enter Loan Proposan Amount">
                                    <p style="color:red" v-if="amountError">{{ amountError }}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Date</label>
                                    <input v-model="date" type="date" class="form-control"
                                        placeholder="Enter Deposit Date">
                                    <p style="color:red" v-if="dateError">{{ dateError }}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"> Tenure(Month)</label>
                                    <input type="number" v-model="tenure" class="form-control" placeholder="Enter Tenure">
                                    <p style="color:red" v-if="tenureError">{{ tenureError }}</p>
                                </div>
                            </div>
                        </div>
                        <button @click="saveLoanProposal" type="submit" class="btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>