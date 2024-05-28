<template>
    <div class="container-fluid g-0">
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="header_iner d-flex justify-content-between align-items-center">
            <div class="sidebar_icon d-lg-none">
              <i class="ti-menu"></i>
            </div>
            <div class="serach_field-area">
              <div class="search_inner">
                <form action="#">
                  <div class="search_field">
                    <input type="text" placeholder="Search here..." />
                  </div>
                  <button type="submit">
                    <img src="/img/icon/icon_search.svg" alt="image" />
                  </button>
                </form>
              </div>
            </div>
            <div class="header_right d-flex justify-content-between align-items-center">
              <div class="header_notification_warp d-flex align-items-center">
                <!-- <li>
                  <div>
                    <h3>Total Customer</h3>
                    <h3>
                      <input type="text" :value="totalCustomer" disabled />
                    </h3>
                  </div>
                </li> -->
                <li>
                  <div>
                    <h3>Total Balance</h3>
                    <h3>
                      <input type="text" :value="totalAmount" disabled />
                    </h3>
                  </div>
                </li>
                <li>
                  <a href="#"> <img src="/img/icon/bell.svg" alt="image" /> </a>
                </li>
                <li>
                  <a href="#"> <img src="/img/icon/msg.svg" alt="image" /> </a>
                </li>
              </div>
              <div class="profile_info">
                <img src="/img/client_img.png" alt="image" />
                <div class="profile_info_iner">
                  <p>Neurologist</p>
                  <h5>Dr. Robar Smith</h5>
                  <div class="profile_info_details">
                    <a href="#">My Profile <i class="ti-user"></i></a>
                    <a href="#">Settings <i class="ti-settings"></i></a>
                    <router-link :to="{name:'homes'}">Log Out <i class="ti-shift-left"></i></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        totalCustomer: 0,
        totalAmount: 0,
        Calculate:0,
        Withdrawal:0,
        CashDeposit:0,
        Loan:0,
        Payment:0
      };
    },
    mounted() {
      this.fetchTotalAmount();
    },
    methods: {
      fetchTotalAmount() {
        axios.get('http://127.0.0.1:8000/api/calculate')
          .then(res => {
            // console.log('API response:', res.data.data);
            this.Calculate = parseFloat(res.data.data.Calculate);
            this.Withdrawal = parseFloat(res.data.data.Withdrawal);
            this.CashDeposit = parseFloat(res.data.data.CashDeposit);
            this.Loan = parseFloat(res.data.data.Loan);
            this.Payment = parseFloat(res.data.data.Payment);
            this.totalCustomer = parseFloat(res.data.data.Customer);
            this.totalAmount = this.Calculate-this.Withdrawal-this.Loan+this.CashDeposit-this.Payment;
          })
          .catch(error => {
            console.error('Error fetching total amount:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add necessary styles here */
  .alert {
    margin-top: 20px;
  }
  </style>
  