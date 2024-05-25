<template>
    <nav class="sidebar">
        <div class="logo d-flex justify-content-between p-0 m-0">
            <a href="#"><img class="" src="/img/bank_logo.jpg" alt="image" /></a>
            <!-- <a href="">
                <h3><span>ABSRM</span></h3>
            </a> -->
            <div class="sidebar_close_icon d-lg-none">
                <i class="ti-close"></i>
            </div>
        </div>
        <ul id="sidebar_menu">
            <li class="side_menu_title">
                <span>Dashboard</span>
            </li>
            <li class="mm-active">
                <RouterLink class="has-arrow" :to="{ name: 'dashboard' }" aria-expanded="false">
                    <img src="/img/menu-icon/1.svg" alt="image" />
                    <span>Dashboard</span>
                </RouterLink>
                <ul>
                    <!-- <li><a class="active" href="index.html">Dashboard 1</a></li>
                    <li><a href="index_2.html">Dashboard 2</a></li> -->
                </ul>
            </li>
            <li class="side_menu_title">
                <span>Services</span>
            </li>
            <li class>
                <RouterLink :to="{ name: 'accountType' }" class="has-arrow" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Account Type</span>
                </RouterLink>
                <ul>
                    <li>
                    </li>
                </ul>
            </li>

            <li class>
                <RouterLink :to="{ name: 'branch' }" class="has-arrow" aria-expanded="false">
                    <img src="/img/menu-icon/3.svg" alt="image" />
                    <span>Branches</span>
                </RouterLink>
            </li>

            <li class>
                <RouterLink :to="{ name: 'customerList' }" class="has-arrow" aria-expanded="false">
                    <img src="/img/menu-icon/4.svg" alt="image" />

                    <span>Customer</span>
                </RouterLink>
            </li>
            <li>
                <a class="has-arrow" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Loan Section</span>
                </a>
                <ul>
                    <li>
                        <RouterLink :to="{ name: 'loanType' }">Loan Type List</RouterLink>
                        <RouterLink :to="{ name: 'loan' }">Loan List</RouterLink>
                        <RouterLink :to="{ name: 'loanProposal' }">Loan Proposal List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class="menu-item">
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />

                    <span>Deposit Section</span>
                </a>
                <ul>
                    <li>
                        <RouterLink :to="{ name: 'depositType' }">Deposit Type List</RouterLink>
                        <RouterLink :to="{ name: 'deposit' }">Deposit List</RouterLink>
                    </li>
                </ul>

            </li>
            <li class>
                <RouterLink :to="{ name: 'withdrawal' }" class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Withdrawal</span>
                </RouterLink>
            </li>
            <li class>
                <RouterLink :to="{ name: 'cashDeposit' }" class="has-arrow" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Cash Deposit</span>
                </RouterLink>
            </li>

            <li class="menu-item">
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Expenses</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <RouterLink to="expensecategory">Expense Category List</RouterLink>
                    </li>
                    <li class="menu-item">
                        <RouterLink to="expense">Expense List</RouterLink>
                    </li>
                </ul>
            </li>

            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Employee</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="employeeType">Employee Type List</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="employee">Employee List</RouterLink>
                    </li>

                </ul>
            </li>

            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Payment</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="payment">Payment List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Card Type</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="cardType">Card Type List</RouterLink>
                        <RouterLink to="cardDetails">Card Details List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Interest</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="interest">Interest List</RouterLink>
                    </li>
                </ul>
            </li>

            <li class="side_menu_title">
                <span>Components</span>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/4.svg" alt="image" />
                    <span>UI Component</span>

                </a>

            </li>
        </ul>
    </nav>
</template>
