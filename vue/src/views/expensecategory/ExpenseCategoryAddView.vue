<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Expense Category Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Expense Category</label>
                                    <input type="text" v-model="expense" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Expense Category">
                                    <p style="color:red" v-if="expenseError">
                                        {{ expenseError }}
                                    </p>
                                </div>
                                <button type="submit" @click="saveexpensecategory" class="btn btn-primary">Submit</button>
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
            expense: '',
            expenseError: ''
        }
    },
    mounted() {
        // console.log('saveexpensecategory')
        // this.saveexpensecategory();
    },
    methods: {
        saveexpensecategory() {
            axios.post('http://127.0.0.1:8000/api/expensecategory', {
                expense: this.expense
            })
                .then(res => {
                    // console.log(res)
                    this.$router.push("/dashboard/expensecategory")
                })

        },
        handleSubmit() {
            if (this.expense.length < 1) {
                this.expenseError = 'Expense Category is required';
                return;
            }
        }

    },
    watch: {
        'expense': function () {
            if (this.expense.length < 4) {
                this.expenseError = 'Expense Category Required'
            } else {
                this.expenseError = ''
            }
        }
    }
}

</script>