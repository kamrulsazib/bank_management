import { createRouter, createWebHistory } from 'vue-router'
import AccountTypeListView from '@/views/account_type/AccountTypeListView.vue'

import AccountTypeAdd from '@/views/account_type/AccountTypeAdd.vue'
import AccountTypeEdit from '@/views/account_type/AccountTypeEdit.vue'
import ExpenseCategoryAddView from '@/views/expensecategory/ExpenseCategoryAddView.vue'
import ExpenseCategoryList from '@/views/expensecategory/ExpenseCategoryList.vue'
import ExpenseCategoryEditView from '@/views/expensecategory/ExpenseCategoryEditView.vue'
import ExpenseListView from '@/views/expenses/ExpenseListView.vue'
import ExpenseAddView from '@/views/expenses/ExpenseAddView.vue'
import ExpenseEditView from '@/views/expenses/ExpenseEditView.vue'
import EmployeeTypeListView from '@/views/employeeType/EmployeeTypeListView.vue'

import EmployeeTypeAdd from '@/views/employeeType/EmployeeTypeAdd.vue'
import EmployeeTypeEditView from '@/views/employeeType/EmployeeTypeEditView.vue'
import EmployeeListView from '@/views/employees/EmployeeListView.vue'
import EmployeeAdd from '@/views/employees/EmployeeAdd.vue'

import LoanTypeListView from '@/views/loan_type/LoanTypeListView.vue'
import LoanListView from '@/views/loan/LoanListView.vue'
import LoanProposalListView from '@/views/loan_proposal/LoanProposalListView.vue'
import DepositTypeListView from '@/views/deposit_type/DepositTypeListView.vue'
import DepositListView from '@/views/deposit/DepositListView.vue'
import LoanTypeAddView from '@/views/loan_type/LoanTypeAddView.vue'
import LoanAddView from '@/views/loan/LoanAddView.vue'
import LoanProposalAddView from '@/views/loan_proposal/LoanProposalAddView.vue'
import DepositTypeAdd from '@/views/deposit_type/DepositTypeAdd.vue'
import DepositAdd from '@/views/deposit/DepositAdd.vue'
import WithdrawalListView from '@/views/withdrawal/WithdrawalListView.vue'
import CashDepositListView from '@/views/cash_deposit/CashDepositListView.vue'

import PaymentListView from '@/views/payment/PaymentListView.vue'
import WithdrawalAdd from '@/views/withdrawal/WithdrawalAdd.vue'

import CashDepositAdd from '@/views/cash_deposit/CashDepositAdd.vue'
import PaymentAdd from '@/views/payment/PaymentAdd.vue'

import LogInView from '@/views/LogInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import CustomerView from '@/views/Customer/CustomerView.vue'
import LoanTypeEdit from '@/views/loan_type/LoanTypeEdit.vue'
import DepositTypeEdit from '@/views/deposit_type/DepositTypeEdit.vue'
import DepositEdit from '@/views/deposit/DepositEdit.vue'
import LoanProposalEdit from '@/views/loan_proposal/LoanProposalEdit.vue'

import EmployeeEditView from '@/views/employees/EmployeeEditView.vue'
import BranchListView from '@/views/branch/BranchListView.vue'
import BranchAddView from '@/views/branch/BranchAddView.vue'
import BranchEditView from '@/views/branch/BranchEditView.vue'
import CardTypeListView from '@/views/card_type/CardTypeListView.vue'
import CardTypeAdd from '@/views/card_type/CardTypeAdd.vue'
import CardTypeEdit from '@/views/card_type/CardTypeEdit.vue'
import CardDetailsListView from '@/views/card/CardDetailsListView.vue'
import CardDetailsEdit from '@/views/card/CardDetailsEdit.vue'
import CardDetailsAdd from '@/views/card/CardDetailsAdd.vue'
import InterestListView from '@/views/interest/InterestListView.vue'
import InterestAdd from '@/views/interest/InterestAdd.vue'
import PaymentEdit from '@/views/payment/PaymentEdit.vue'
import Admin from '@/views/Admin.vue'



const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'login',
            component: LogInView
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpView
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [{
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () =>
                        import ("@/views/DashboardView.vue"),
                },
                {
                    path: 'accountType',
                    name: 'accountType',
                    component: AccountTypeListView
                },
                {
                    path: 'loanType',
                    name: 'loanType',
                    component: LoanTypeListView
                },
                {
                    path: 'loanTypeAdd',
                    name: 'loanTypeAdd',
                    component: LoanTypeAddView
                },
                {
                    path: 'editLoanType/:id',
                    name: 'editLoanType',
                    component: LoanTypeEdit,
                    props: true // Pass route params as props to the component
                },
                {
                    path: 'loan',
                    name: 'loan',
                    component: LoanListView
                },
                {
                    path: 'loanAdd',
                    name: 'loanAdd',
                    component: LoanAddView
                },
                {
                    path: 'loanProposal',
                    name: 'loanProposal',
                    component: LoanProposalListView
                },
                {
                    path: 'loanProposalAdd',
                    name: 'loanProposalAdd',
                    component: LoanProposalAddView
                },
                {
                    path: 'editloanProposal/:id',
                    name: 'editloanProposal',
                    component: LoanProposalEdit,
                    props: true
                },
                {
                    path: 'depositType',
                    name: 'depositType',
                    component: DepositTypeListView
                },
                {
                    path: 'depositTypeAdd',
                    name: 'depositTypeAdd',
                    component: DepositTypeAdd
                },
                {
                    path: 'editdepositType/:id',
                    name: 'editdepositType',
                    component: DepositTypeEdit,
                    props: true // Pass route params as props to the component
                },
                {
                    path: 'deposit',
                    name: 'deposit',
                    component: DepositListView
                },
                {
                    path: 'depositAdd',
                    name: 'depositAdd',
                    component: DepositAdd
                },
                {
                    path: 'editdeposit/:id',
                    name: 'editdeposit',
                    component: DepositEdit,
                    props: true
                },
                {
                    path: 'withdrawal',
                    name: 'withdrawal',
                    component: WithdrawalListView
                },
                {
                    path: 'withdrawalAdd',
                    name: 'withdrawalAdd',
                    component: WithdrawalAdd
                },
                {
                    path: 'cashDeposit',
                    name: 'cashDeposit',
                    component: CashDepositListView
                },
                {
                    path: 'cashDepositAdd',
                    name: 'cashDepositAdd',
                    component: CashDepositAdd
                },
                {
                    path: 'payment',
                    name: 'payment',
                    component: PaymentListView
                },
                {
                    path: 'paymentAdd',
                    name: 'paymentAdd',
                    component: PaymentAdd
                },
                {
                    path: 'paymentEdit/:id',
                    name: 'paymentEdit',
                    component: PaymentEdit
                },
                {
                    path: 'interest',
                    name: 'interest',
                    component: InterestListView
                },
                {
                    path: 'interestAdd',
                    name: 'interestAdd',
                    component: InterestAdd
                },
                {
                    path: 'accountTypeAdd',
                    name: 'accountTypeAdd',
                    component: AccountTypeAdd
                },
                {
                    path: 'editAccountType/:id',
                    name: 'editAccountType',
                    component: AccountTypeEdit,
                    props: true // Pass route params as props to the component
                },

                {
                    path: 'expesecategoryadd',
                    name: 'expesecategoryadd',
                    component: ExpenseCategoryAddView
                },
                {
                    path: 'expensecategory',
                    name: 'expensecategory',
                    component: ExpenseCategoryList
                },

                {
                    path: 'expensecategoryedit/:id',
                    name: 'expensecategoryedit',
                    component: ExpenseCategoryEditView,
                    props: true
                },

                {
                    path: 'expense',
                    name: 'expense',
                    component: ExpenseListView
                },
                {
                    path: 'expenseadd',
                    name: 'expenseadd',
                    component: ExpenseAddView
                },
                {
                    path: 'expenseedit/:id',
                    name: 'expenseedit',
                    component: ExpenseEditView,
                    props: true
                },

                {
                    path: 'employeeType',
                    name: 'employeeType',
                    component: EmployeeTypeListView
                },
                {
                    path: 'employeeTypeadd',
                    name: 'employeeTypeadd',
                    component: EmployeeTypeAdd
                },
                {
                    path: 'employeeTypeEdit/:id',
                    name: 'employeeTypeEdit',
                    component: EmployeeTypeEditView
                },

                {
                    path: 'employee',
                    name: 'employee',
                    component: EmployeeListView
                },
                {
                    path: 'employeeadd',
                    name: 'employeeadd',
                    component: EmployeeAdd
                },
                {
                    path: 'employeeEdit/:id',
                    name: 'employeeEdit',
                    component: EmployeeEditView,
                    props: true

                },

                {
                    path: 'customerList/',
                    name: 'customerList',
                    component: CustomerView
                },
                {
                    path: 'cardType/',
                    name: 'cardType',
                    component: CardTypeListView
                },
                {
                    path: 'cardAdd',
                    name: 'cardAdd',
                    component: CardTypeAdd
                },
                {
                    path: 'editCardType/:id',
                    name: 'editCardType',
                    component: CardTypeEdit,
                    props: true // Pass route params as props to the component
                },
                {
                    path: 'cardDetails',
                    name: 'cardDetails',
                    component: CardDetailsListView
                },
                {
                    path: 'cardDetailsAdd',
                    name: 'cardDetailsAdd',
                    component: CardDetailsAdd
                },
                {
                    path: 'editCardDetails/:id',
                    name: 'editCardDetails',
                    component: CardDetailsEdit,
                    props: true // Pass route params as props to the component
                },
                {
                    path: 'branch',
                    name: 'branch',
                    component: BranchListView
                },
                {
                    path: 'branchAdd',
                    name: 'branchAdd',
                    component: BranchAddView
                },

                {
                    path: 'branchEdid/:id',
                    name: 'branchEdid',
                    component: BranchEditView,
                    props: true
                },
            ]
        },
    ]
})


export default router