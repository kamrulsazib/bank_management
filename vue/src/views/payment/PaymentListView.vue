<script>
import NavbarView from '../inc/NavbarView.vue';
export default {
    components:{
        NavbarView
    },
    data() {
        return{

        }
    }
}

</script>

<template>
    <main>
        <NavbarView/>
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
                        <h4 class="m-3 table_heading">Payment List</h4>
                    </div>
                    <div class="col-md-6 text-end mt-2">
                        <RouterLink to="/dashboard/paymentAdd" class="btn btn-warning">Add New</RouterLink>
                    </div>
                </div>

                <table class="table table-striped ">
                    <thead class="table_color">
                        <tr>
                            <th>SL</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Transaction No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>14/04/2023</td>
                            <td>39000</td>
                            <td>475836</td>
                            <td>
                                <button class="btn btn-success btn-sm me-2">Edit</button>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>