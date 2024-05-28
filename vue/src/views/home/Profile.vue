<template>
    <div class="main_content_iner ">
        <div class="container-fluid p-0">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="white_box mb_30">
                        <div class="box_header ">
                            <div class="main-title">
                                <h3 class="mb-0">Customer Profile</h3>
                            </div>
                        </div>
                        <div class="profile-cart_2">
                            <div class="images"><img src="../../../public/img/card.jpg" alt=""></div>
                            <h1>Araaf Kling</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nam
                                quia commodi? Voluptates
                                tenetur autem numquam. Tempora, corrupti tenetur ex sed officia facilis eius.</p>
                            <div class="social-area">
                                <a href=""><i class="fab fa-facebook"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin"></i></a>
                                <a href=""><i class="fab fa-codepen"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="white_box mb_30">
                        <div class="box_header ">
                            <div class="main-title">
                                <h3 class="mb-0">Account</h3>
                            </div>
                        </div>
                        <div class="pCard_card">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6"><router-link class="btn btn-primary" :to="{name:'CloanProposalAdd'}">Apply for Loan Section</router-link></div>

                                    <div class="col-6"><router-link class="btn btn-primary" :to="{name:'cwithdrawalAdd'}">Withdraw Section</router-link></div>
                                    <div>
                                        <router-view></router-view>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>