<script>
import NavbarView from '../inc/NavbarView.vue';

export default {
    components: {
        NavbarView
    }
}
</script>


<template>
    <main>
        <NavbarView/>
        <section class="main_content dashboard_part">
            <div class="container card mt-5 ms-2">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card-header mt-5">
                            <h4 class="table_heading">Payment List Add</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Date</label>
                                    <input type="date" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Interest Rate">
                                    <label for="exampleInputEmail1" class="form-label">Amount</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Amount">
                                    <label for="exampleInputEmail1" class="form-label">Transaction No.</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        placeholder="Enter Transaction No.">
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