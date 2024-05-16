<template>
    <main>
        <NavbarViewVue/>
        <section class="main_content dashboard_part">
            <div class="container card card-body mt-5 ms-2">
                <div class="row">
                    <div class="col-md-4">
                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h4 class="m-3 table_heading">Expense Category List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/expesecategoryadd" class="btn btn-warning">Add New</RouterLink>

                    </div>

                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Expense</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, i) in expensecategory" :key="i">
                            <th>{{ i + 1 }}</th>
                            <td>{{ d.expense }}</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2" @click="edit(d.id)">Edit</button>
                                <button class="btn btn-danger btn-sm" @click="expensecategoryDelete(d.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            url: 'http://127.0.0.1:8000/api/expensecategory',
            expensecategory: []
        }
    },
    mounted() {
        this.getexpensecategory();
    },
    methods: {
        getexpensecategory() {
            axios.get(`${this.url}`)
            .then((result) => {
                    this.expensecategory = (result.data.data);
                    //console.log(result.data.data);
                })

        },
       
        expensecategoryDelete(id) {
            axios.delete(`${this.url}/${id}`)
                .then(() => {
                    this.getexpensecategory();
                    this.$router.push('/dashboard/expensecategory');
                })
                .catch(error => {
                    console.error('Error deleting Expense Category:', error);
                });
        },
        edit(id) {
            this.$router.push({ name: 'expensecategoryedit', params: { id: id } });
        },


    },
    
}

</script>