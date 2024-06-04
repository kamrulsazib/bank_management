<template>
    <main>
        <NavbarViewVue />
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Account Type Edit</h4>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Account Type</label>
                                <input type="text" v-model="account_type" class="form-control"
                                    id="exampleInputEmail1" placeholder="Enter Account Type">
                                <p style="color:red" v-if="nameError">
                                    {{ nameError }}
                                </p>
                            </div>
                            <button type="submit" @click="updateAccountType" class="btn btn-primary">Submit</button>
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
            url: 'http://127.0.0.1:8000/api/accountType',
            name: '',
            nameError: '',
            account_type: '',
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
                    this.account_type = (res.data.data.account_type)
                    this.id = (res.data.data.id)
                })
        },
        updateAccountType() {
            axios.put(`${this.url}/${this.id}`, {
                account_type: this.account_type
            })
                .then(res => {
                    this.$router.push("accountType")
                })
        },



        // handleSubmit() {
        //     if (this.name.length < 1) {
        //         this.nameError = 'Account type is required';
        //         return;
        //     }
        // }

    },
    watch: {
        'name': function () {
            if (this.name.length < 4) {
                this.nameError = 'Account type Required'
            } else {
                this.nameError = ''
            }
        }
    }
}

</script>