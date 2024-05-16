<template>
  <main>
    <NavbarViewVue />

    <section class="main_content dashboard_part">
      <div class="container card mt-5 ms-2">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card-header mt-5">
              <h4 class=" table_heading">Expense Update</h4>
            </div>
            <div class="card-body">
              <!-- <form @submit.prevent="handleSubmit"> -->
                <div class="mb-3">
                  <label for="nomineeNid" class="form-label">Expense Category</label>
                  <select class="form-select" v-model="expense_category_id" aria-label="Default select example">
                    <option value="0" >Please select an Expense Category</option>
                    <option v-for="(d, i) in expense_category_list" :key="i" :value="d.id">
                      {{ d.expense }}</option>

                  </select>
                  <!-- <p style="color:red" v-if="expenseCategoryError">
                    {{ expenseCategoryError }}
                  </p> -->
                </div>

                <div class="mb-3">
                  <label for="date" class="form-label">Date</label>
                  <input type="date" v-model="date" class="form-control" id="date" placeholder="Enter Your date">
                  <!-- <p style="color:red" v-if="dateError">
                    {{ dateError }}
                  </p> -->
                </div>
                <button type="submit" @click="updateExpense" class="btn btn-primary">Submit</button>
              <!-- </form> -->

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
      url: 'http://127.0.0.1:8000/api/expense',
      expenseCategory: [],
      expense_category_id:'',
      expense_category_list:[],
      date: '',
      id: this.$route.params.id, // Initialize properly, possibly from route or props
      expenseCategoryError: '',
      dateError: ''
    }
  },

  methods: {
    getExpenseCategories() {
      axios.get("http://127.0.0.1:8000/api/expensecategory")
        .then(res => {
          //this.expense_category_id = res.data.data.id;
          const getData= res.data.data;
          this.expense_category_list = getData;
        })
        .catch(error => {
          console.error('Error fetching expense categories:', error);
        });
    },

    getexpense() {
      const id = this.id
      axios.get(this.url + '/' + this.id + '/edit')
        .then((res) => {
          const dt = res.data.data;
          this.expense_category_id = dt.expense_category_id;
          this.date = dt.date;
          //console.log(dt.expense_category_id);
        })
    },
    updateExpense() {
      // if (!this.validateForm()) return;
      const aldata={
        expense_category_id: this.expense_category_id,
        date: this.date
      };
      console.log(aldata)
      axios.put(`${this.url}/${this.id}`,aldata)
        .then(res => {
          this.$router.push("/dashboard/expense");
        })
        .catch(error => {
          console.error('Error updating expense:', error);
        });
    }
  },
  mounted() {
    this.getExpenseCategories()
    this.getexpense()
  }
}
</script>
