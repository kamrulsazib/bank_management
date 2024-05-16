<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios'

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/depositType',
            depositType: '',
            depositTypeError: '',
            deposit_type: '',
            id: ''
        }
    },
    mounted() {
        this.getEditData();
    },
    methods: {
        getEditData() {
            axios.get(`${this.url}/${this.$route.params.id}/edit`)
                .then(res => {
                    this.deposit_type = (res.data.data.deposit_type)
                    this.id = (res.data.data.id)
                })
        },
        updateDepositType() {
            axios.put(`${this.url}/${this.id}`, {
                deposit_type: this.deposit_type
            })
                .then(res => {
                    this.$router.push("/dashboard/depositType")
                })
        },


    },
    watch: {
        'depositType': function () {
            if (this.depositType.length < 4) {
                this.depositTypeError = 'Deposit type Required'
            } else {
                this.depositTypeError = ''
            }
        }
    }
}

</script>
<template>
    <main>
        <NavbarViewVue />
        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Deposit Type Add</h4>
                        </div>
                        <div class="card-body">

                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Deposit Type</label>
                                    <input type="text" v-model="deposit_type" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Loan Type">
                                    <p style="color:red" v-if="depositTypeError">
                                        {{ depositTypeError }}
                                    </p>
                                </div>
                                <button type="submit" @click="updateDepositType" class="btn btn-primary">Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>