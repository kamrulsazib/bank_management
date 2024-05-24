<template>
    <main>
        <NavbarViewVue />
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Account Type Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Account Type</label>
                                    <input type="text" v-model="name" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Account Type">
                                    <p style="color:red" v-if="nameError">
                                        {{ nameError }}
                                    </p>
                                </div>
                                <button type="submit" @click="savaAccountType" class="btn btn-primary">Submit</button>
                            </form>

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
            name: '',
            nameError: ''
        }
    },
    mounted() {
        // console.log('savaAccountType')
        // this.savaAccountType();
    },
    methods: {
        savaAccountType() {
            // console.log(this.name)
            const AccountTypeData = {
                account_type: this.name
            }
            // console.log(AccountTypeData)
            axios.post('http://127.0.0.1:8000/api/accountType', AccountTypeData)
                .then(res => {
                    this.accountType = (res.data.data)
                    console.log(res.data.data)
                    this.$router.push("accountType")
                })

        },
        handleSubmit() {
            if (this.name.length < 1) {
                this.nameError = 'Account type is required';
                return;
            }
        }

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