<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/loanType',
            name: '',
            nameError: '',
            loan_type: '',
            id: ''


        }
    },
    mounted() {
        this.getEditData()
    },
    methods: {
        getEditData() {
            axios.get(`${this.url}/${this.$route.params.id}/edit`)
                .then(res => {
                    this.loan_type = (res.data.data.loan_type)
                    this.id = (res.data.data.id)
                })

        },
        updateLoanType() {
            axios.put(`${this.url}/${this.id}`, {
                loan_type: this.loan_type
            })
                .then(res => {
                    this.$router.push("/dashboard/loanType")
                })

        },
    },
    watch: {
        'name': function () {
            if (this.name.length < 4) {
                this.nameError = 'Loan type Required'
            } else {
                this.nameError = ''
            }
        }
    }
}

</script>

<template>
    <main>
        <NavbarViewVue />
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Loan Type Edit</h4>
                        </div>
                        <div class="card-body">

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Loan Type</label>
                                <input type="text" v-model="loan_type" class="form-control" id="exampleInputEmail1"
                                    placeholder="Enter Loan Type">
                                <p style="color:red" v-if="nameError">{{ nameError }}</p>
                            </div>
                            <button type="submit" @click="updateLoanType" class="btn btn-primary">Submit</button>

                        </div>
                    </div>
                </div>
            </div>
    </main>
</template>