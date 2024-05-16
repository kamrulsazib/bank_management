<script>
import NavbarViewVue from '../inc/NavbarView.vue';
import axios from 'axios';

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: ('http://127.0.0.1:8000/api/interest'),
            account_type_id_list: '',
            account_type: '',
            interest_rate:'',
            account_type_id_listError: '',
            interest_rateError: '',
        }
    },
    mounted() {
        this.getInterest();
    },
    methods: {
        getInterest() {
            axios.get('http://127.0.0.1:8000/api/accountType')
                .then(res => {
                    this.account_type_id_list = (res.data.data)
                })
        },

        saveinterest(){
            axios.post(`${this.url}`, {
                account_type_id: this.account_type,
                interest_rate: this.interest_rate
            })
            .then(res =>{
                this.$router.push("/dashboard/interest")
            })
        }
    },
    // watch: {
    //     'name': function () {
    //         if (this.name.length < 1) {
    //             this.nameError = 'Interest rate is required'
    //         } else {
    //             this.nameError = ''
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
                            <h4 class="table_heading">Interest Rate Add</h4>
                        </div>
                        <div class="card-body">
                            <!-- <form @submit.prevent="handleSubmit"> -->
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Account Type</label>
                                    <select class="form-select col-md-10" v-model="account_type"
                                            aria-label="Default select example">
                                        <option disabled value="">Account Type</option>
                                        <option v-for="(d,i) in account_type_id_list" :key="i" :value="d.id">{{ d.account_type }}</option>
                                        </select>

                                        <p style="color:red" v-if="account_type_id_listError">
                                        {{ account_type_id_listError }}
                                        </p>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Interest Rate (%)</label>
                                    <input type="text" v-model="interest_rate" class="form-control" id="exampleInputEmail1" placeholder="Enter Interest Rate">
                                    <p style="color:red" v-if="interest_rateError">
                                        {{ interest_rateError }}
                                    </p>
                                </div>
                                <button type="submit" @click="saveinterest" class="btn btn-primary">Submit</button>
                            <!-- </form> -->
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>