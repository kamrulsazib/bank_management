<template>
    <main>
        <navbar-view-vue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Add Branch</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="branchNameInput" class="form-label">Branch Name</label>
                                    <input type="text" v-model.trim="branchName" class="form-control"
                                        id="branchNameInput" placeholder="Enter Branch Name">
                                    <p v-if="branchNameError" class="text-danger">{{ branchNameError }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="addressInput" class="form-label">Address</label>
                                    <input type="text" v-model.trim="address" class="form-control"
                                        id="addressInput" placeholder="Enter Address">
                                    <p v-if="addressError" class="text-danger">{{ addressError }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="assetsInput" class="form-label">Asset</label>
                                    <input type="text" v-model.trim="asset" class="form-control"
                                        id="assetsInput" placeholder="Enter Asset">
                                    <p v-if="assetError" class="text-danger">{{ assetError }}</p>
                                </div>

                                <div class="mb-3">
                                    <label for="debtsInput" class="form-label">DEBT</label>
                                    <input type="text" v-model.trim="debt" class="form-control"
                                        id="debtsInput" placeholder="Enter Debt">
                                    <p v-if="debtError" class="text-danger">{{ debtError }}</p>
                                </div>

                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavbarViewVue from "../inc/NavbarView.vue";
import axios from 'axios';

export default {
    components: {
        NavbarViewVue
    },
    data() {
        return {
            branchName: '',
            branchNameError: '',
            address: '',
            addressError: '',
            asset: '',
            assetError: '',
            debt: '',
            debtError: ''
        }
    },
    methods: {
        saveBranch() {
            axios.post('http://127.0.0.1:8000/api/branch', {
                branch_name: this.branchName,
                address: this.address,
                asset: this.asset,
                debt: this.debt,
            })
                .then(res => {
                    // console.log(res)
                    this.$router.push("/dashboard/branch");
                })
                .catch(error => {
                    console.error("Error adding branch:", error);
                });
        },
        handleSubmit() {
            this.branchNameError = '';
            this.addressError = '';
            this.assetError = '';
            this.debtError = '';

            if (!this.branchName) {
                this.branchNameError = 'Branch Name is required';
            }
            if (!this.address) {
                this.addressError = 'Address is required';
            }
            if (!this.asset) {
                this.assetError = 'Asset is required';
            }
            if (!this.debt) {
                this.debtError = 'Debt is required';
            }

            if (this.branchName && this.address && this.asset && this.debt) {
                this.saveBranch();
            }
        }
    },
}
</script>
