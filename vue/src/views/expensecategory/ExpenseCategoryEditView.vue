<template>
  <main>
    <NavbarViewVue />

    <section class="main_content dashboard_part">
      <div class="container card mt-5 ms-2">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card-header mt-5">
              <h4 class="table_heading">Expense Category Edit</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="expenseInput" class="form-label">Expense Category</label>
                  <input type="text" v-model="expense" class="form-control" id="expenseInput" placeholder="Enter Expense Category">
                  <p style="color: red">{{ expenseError }}</p>
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
      url: 'http://127.0.0.1:8000/api/expensecategory',
      expense: '',
      expenseError: '',
      id: this.$route.params.id // Initialize id with route parameter
    };
  },
  mounted() {
    this.getEditData();
  },
  methods: {
    getEditData() {
      axios.get(`${this.url}/${this.id}/edit`)
        .then(res => {
          this.expense = res.data.data.expense;
        })
        .catch(error => {
          console.error('Error fetching expense category:', error);
        });
    },
    handleSubmit() {
      if (this.expense.length < 4) {
        this.expenseError = 'Expense Category must be at least 4 characters long.';
        return; // Prevent submission if there's an error
      }
      axios.put(`${this.url}/${this.id}`, { expense: this.expense })
        .then(res => {
          console.log('Expense category updated:', res.data);
          this.$router.push("/dashboard/expensecategory");
        })
        .catch(error => {
          console.error('Error updating expense category:', error);
          // Provide user feedback here if needed
        });
    }
  },
  watch: {
    expense(newValue) {
      if (newValue.length < 4) {
        this.expenseError = 'Expense Category must be at least 4 characters long.';
      } else {
        this.expenseError = '';
      }
    }
  }
};
</script>
