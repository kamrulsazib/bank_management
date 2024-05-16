<script>

export default {
    name: 'NavbarView'
}
</script>



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
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/1.svg" alt="image" />
                    <span>Dashboard</span>
                </a>
                <ul>
                    <!-- <li><a class="active" href="index.html">Dashboard 1</a></li>
                    <li><a href="index_2.html">Dashboard 2</a></li> -->
                </ul>
            </li>
            <li class="side_menu_title">
                <span>Services</span>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Account Type</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/accountType">Account Type List</RouterLink>
                    </li>
                </ul>
            </li>

            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Branch</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/branch">Branch List</RouterLink>
                    </li>
                </ul>
            </li>

            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />

                    <span>Customer</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/customerList">Customer List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />

                    <span>Loan Section</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/loanType">Loan Type List</RouterLink>
                        <RouterLink to="/dashboard/loan">Loan List</RouterLink>
                        <RouterLink to="/dashboard/loanProposal">Loan Proposal List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />

                    <span>Deposit Section</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/depositType">Deposit Type List</RouterLink>
                        <RouterLink to="/dashboard/deposit">Deposit List</RouterLink>
                    </li>
                </ul>

            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Withdrawal</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/withdrawal">Withdrawal List</RouterLink>
                    </li>
                </ul>
            </li>
            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Cash Deposit</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/cashDeposit">Cash Deposit List</RouterLink>
                    </li>
                </ul>
            </li>

            <li class>
                <a class="has-arrow" href="#" aria-expanded="false">
                    <img src="/img/menu-icon/2.svg" alt="image" />
                    <span>Expenses</span>
                </a>
                <ul>
                    <li>
                        <RouterLink to="/dashboard/expensecategory">Expense Category List</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dashboard/expense">Expense List</RouterLink>
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
                        <RouterLink to="/dashboard/employeeType">Employee Type List</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/dashboard/employee">Employee List</RouterLink>
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
                        <RouterLink to="/dashboard/payment">Payment List</RouterLink>
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
                        <RouterLink to="/dashboard/cardType">Card Type List</RouterLink>
                        <RouterLink to="/dashboard/cardDetails">Card Details List</RouterLink>
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
                        <RouterLink to="/dashboard/interest">Interest List</RouterLink>
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
