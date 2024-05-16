<template>
    <main>
        <NavbarViewVue/>

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Deposit Updated</h4>
                        </div>
                        <div class="card-body">
                          <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Customer Name</label>
                                    <select v-model="selectCustomer" class="form-select col-md-10" >
                                        <option value="">Customer Name</option>
                                        <option v-for="(d, i) in customer" :key="i" :value="d.id" >{{d.customer_name}}</option>
                                        <!-- <p style="color:red" v-if="customerError">{{ customerError }}</p> -->
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Deposit Type</label>
                                    <select v-model="selectDepositType" class="form-select col-md-10" >
                                        <option value="">Deposit Type </option>
                                        <option v-for="(d, i) in depositType" :key="i" :value="d.id" >{{d.deposit_type}}</option>
                                        <!-- <p style="color:red" v-if="depositTypeError">{{ depositTypeError }}</p> -->
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Interest Rate</label>
                                    <select v-model="selectInterestRate" class="form-select col-md-10" >
                                        <option value="">Interest Rate</option>
                                        <option v-for="(d, i) in interest" :key="i" :value="d.id" >{{d.interest_rate}}</option>
                                        <!-- <p style="color:red" v-if="interestError">{{ interestError }}</p> -->
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Date</label>
                                    <input v-model="date" type="date" class="form-control" placeholder="Enter Deposit Date">
                                    <!-- <p style="color:red" v-if="dateError">{{ dateError }}</p> -->
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Deposit Scheme</label>
                                    <input v-model="depositScheme" type="text" class="form-control" placeholder="Enter Deposit Scheme">
                                    <!-- <p style="color:red" v-if="depositSchemeError">{{ depositSchemeError }}</p> -->
                                </div>
                            </div>
                          </div>
                                <button @click="updatedDeposit" type="submit" class="btn btn-primary">Submit</button>
                        
                        </div>
                    </div>
                </div>

            </div>
        </section>
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
            url: 'http://127.0.0.1:8000/api/deposit',
            customer: [],
            depositType: [],
            interest: [],
            deposit: '',
            selectCustomer: '',
            selectDepositType: '',
            selectInterestRate: '',
            date: '',
            depositScheme: '',
            customerError: '',
            depositTypeError: '',
            interestError: '',
            dateError: '',
            depositSchemeError: '',
            id: this.$route.params.id,

        }
    },
    mounted() {
        this.getcustomer();
        this.getdepositType();
        this.getinterest();
        this.getdeposit();
    },
    methods: {
        getcustomer() {
            axios.get('http://127.0.0.1:8000/api/customer')
                .then(res => {
                    this.customer = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching customer',error);
                });

        },
        getdepositType() {
            axios.get('http://127.0.0.1:8000/api/depositType')
                .then(res => {
                    this.depositType = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching Deposit types',error);
                });

        },
        getinterest() {
            axios.get('http://127.0.0.1:8000/api/interest')
                .then(res => {
                    this.interest = (res.data.data)
                })
                .catch(error => {
                    console.error('Error fetching Deposit types',error);
                });

        },
        getdeposit() {
            const id = this.id
            axios.get(this.url + '/' + this.id + '/edit')
                .then((res) => {
                    const dt = res.data.data;
                    this.selectCustomer = dt.customer_id;
                    this.selectDepositType = dt.deposit_type_id;
                    this.selectInterestRate = dt.interest_id;
                    this.date = dt.date;
                    this.depositScheme = dt.deposit_scheme

                    //console.log(dt.expense_category_id);
                })
        },

        updatedDeposit() {
            const alldata={
                customer_id: this.selectCustomer,
                deposit_type_id: this.selectDepositType,
                interest_id: this.selectInterestRate,
                date: this.date,
                deposit_scheme: this.depositScheme
            };
            axios.put(`${this.url}/${this.id}`, alldata)
            .then(res => {
                this.$router.push('/dashboard/deposit');
            })
            .catch(error => {
                console.error('Error fetching Deposit',error);
            });

        },

        // clearErrors() {
        //     this.customerError ,
        //     this.depositTypeError ,
        //     this.interestError ,
        //     this.dateError ,
        //     this.depositSchemeError         
        // }
    }
}

</script>