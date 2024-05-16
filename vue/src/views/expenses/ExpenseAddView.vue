<template>
    <main>
        <NavbarViewVue />

        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class=" table_heading">Expense Add</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="handleSubmit">
                                <div class="mb-3">
                                    <label for="nomineeNid" class="form-label">Expense Category Id</label>
                                    <select class="form-select" v-model="selectedExpenseCategory"
                                        aria-label="Default select example">
                                        <option disabled value="">Please select an Expense Category</option>
                                        <option v-for="(d, i) in expenseCategory" :key="i" :value="d.id">
                                            {{ d.expense }}</option>

                                    </select>
                                    <p style="color:red" v-if="expenseCategoryError">
                                        {{ expenseCategoryError }}
                                    </p>
                                </div>

                                <div class="mb-3">
                                    <label for="date" class="form-label">Date</label>
                                    <input type="date" v-model="date" class="form-control" id="date"
                                        placeholder="Enter Your date">
                                    <p style="color:red" v-if="dateError">
                                        {{ dateError }}
                                    </p>
                                </div>
                                <button type="submit" @click="saveexpense" class="btn btn-primary">Submit</button>
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
            url: 'http://127.0.0.1:8000/api/expense',
            expenseCategory: '',
            selectedExpenseCategory: '',
            date: '',
        }
    },
    mounted() {
        this.getexpensecategory();
    },

    methods: {
        getexpensecategory() {
            axios.get('http://127.0.0.1:8000/api/expensecategory')
                .then(res => {
                    this.expenseCategory = (res.data.data)
                })

        },

        saveexpense() {
            axios.post(`${this.url}`, {
                expense_category_id: this.selectedExpenseCategory,
                date: this.date
            })
            .then(res => {
                   // this.expense = (res.data.data)
                    //console.log(res)
                    this.$router.push("/dashboard/expense")
                })

        },
       

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