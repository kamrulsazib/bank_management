<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Card Details Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <input type="text" v-model="name" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Name">
                                    <p style="color:red" v-if="nameError">
                                        {{ nameError }}
                                    </p>
                                </div>
                                <button type="submit" @click="saveCardDetails" class="btn btn-primary">Submit</button>
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
        saveCardDetails() {
            // console.log(this.name)
            const CardDetailsData = {
                card: this.name
            }
            // console.log(AccountTypeData)
            axios.post('http://127.0.0.1:8000/api/cardDetails', CardDetailsData)
                .then(res => {
                    // this.cardType = (res.data.data)
                    console.log(res.data.data)
                    // this.$router.push("/dashboard/cardType")
                })

        },
        handleSubmit() {
            if (this.name.length < 1) {
                this.nameError = 'Name is required';
                return;
            }
        }

    },
    watch: {
        'name': function () {
            if (this.name.length < 4) {
                this.nameError = 'Card Details is Required'
            } else {
                this.nameError = ''
            }
        }
    }
}

</script>