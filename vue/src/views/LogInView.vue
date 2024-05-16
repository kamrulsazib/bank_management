<template>
  <main>
    <!-- <NavbarView /> -->
    <section class="container mt-5">
      <div class="main_content_iner ">
        <div class="container-fluid p-0">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="white_box mb_30">
                <div class="row justify-content-center">
                  <div class="col-lg-6">

                    <div class="modal-content cs_modal">
                      <div class="modal-header">
                        <h5 class="modal-title">Log in</h5>
                      </div>
                      <div class="modal-body">
                        <form>
                          
                          <div class>
                            <input type="text" class="form-control" placeholder="Enter your email">
                          </div>
                          <div class>
                            <input type="password" class="form-control" placeholder="Password">
                          </div>
                          <a href="#" class="btn_1 full_width text-center">Log in</a>
                          <p>Need an account? <RouterLink to="signup"> Sign Up</RouterLink></p>
                          <div class="text-center">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#forgot_password" data-bs-dismiss="modal"
                              class="pass_forget_btn">Forget
                              Password?</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer_iner text-center">
                <p>2020 © Influence - Designed by <a href="#"> <i class="ti-heart"></i> </a><a href="#">
                    Dashboard</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavbarView from './inc/NavbarView.vue'
export default {
  components: { NavbarView },

}
</script>