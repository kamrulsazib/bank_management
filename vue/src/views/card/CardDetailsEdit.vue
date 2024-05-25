<template>
    <main>
        <NavbarViewVue />
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Card Details Edit</h4>
                        </div>
                        <div class="card-body">
                            <!-- <form @submit.prevent="handleSubmit"> -->
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Card Details</label>
                                <input type="text" v-model="card" class="form-control"
                                    id="exampleInputEmail1" placeholder="Enter Card Details">
                                <p style="color:red" v-if="nameError">
                                    {{ nameError }}
                                </p>
                            </div>
                            <button type="submit" @click="updateCardDetails" class="btn btn-primary">Submit</button>
                            <!-- </form> -->

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
            url: 'http://127.0.0.1:8000/api/cardDetails',
            name: '',
            nameError: '',
            card_type: '',
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
                    this.card = (res.data.data.card)
                    this.id = (res.data.data.id)
                })
        },
        updateCardDetails() {
            axios.put(`${this.url}/${this.id}`, {
                card: this.card
            })
                .then(res => {
                    this.$router.push("/dashboard/cardDetails")
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
                this.nameError = 'Card Details Required'
            } else {
                this.nameError = ''
            }
        }
    }
}

</script>