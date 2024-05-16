import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
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



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/dashboard/accountType',
      name: 'accountType',
      component: AccountTypeListView
    },
    {
      path: '/dashboard/loanType',
      name: 'loanType',
      component: LoanTypeListView
    },
    {
      path: '/dashboard/loanTypeAdd',
      name: 'loanTypeAdd',
      component: LoanTypeAddView
    },
    {
      path: '/dashboard/editLoanType/:id',
      name: 'editLoanType',
      component: LoanTypeEdit,
      props: true // Pass route params as props to the component
    },
    {
      path: '/dashboard/loan',
      name: 'loan',
      component: LoanListView
    },
    {
      path: '/dashboard/loanAdd',
      name: 'loanAdd',
      component: LoanAddView
    },
    {
      path: '/dashboard/loanProposal',
      name: 'loanProposal',
      component: LoanProposalListView
    },
    {
      path: '/dashboard/loanProposalAdd',
      name: 'loanProposalAdd',
      component: LoanProposalAddView
    },
    {
      path: '/dashboard/editloanProposal/:id',
      name: 'editloanProposal',
      component: LoanProposalEdit,
      props: true
    },
    {
      path: '/dashboard/depositType',
      name: 'depositType',
      component: DepositTypeListView
    },
    {
      path: '/dashboard/depositTypeAdd',
      name: 'depositTypeAdd',
      component: DepositTypeAdd
    },
    {
      path: '/dashboard/editdepositType/:id',
      name: 'editdepositType',
      component: DepositTypeEdit,
      props: true // Pass route params as props to the component
    },
    {
      path: '/dashboard/deposit',
      name: 'deposit',
      component: DepositListView
    },
    {
      path: '/dashboard/depositAdd',
      name: 'depositAdd',
      component: DepositAdd
    },
    {
      path: '/dashboard/editdeposit/:id',
      name: 'editdeposit',
      component: DepositEdit,
      props: true
    },
    {
      path: '/dashboard/withdrawal',
      name: 'withdrawal',
      component: WithdrawalListView
    },
    {
      path: '/dashboard/withdrawalAdd',
      name: 'withdrawalAdd',
      component: WithdrawalAdd
    },
    {
      path: '/dashboard/cashDeposit',
      name: 'cashDeposit',
      component: CashDepositListView
    },
    {
      path: '/dashboard/cashDepositAdd',
      name: 'cashDepositAdd',
      component: CashDepositAdd
    },
    {
      path: '/dashboard/payment',
      name: 'payment',
      component: PaymentListView
    },
    {
      path: '/dashboard/paymentAdd',
      name: 'paymentAdd',
      component: PaymentAdd
    },
    {
      path: '/dashboard/interest',
      name: 'interest',
      component: InterestListView
    },
    {
      path: '/dashboard/interestAdd',
      name: 'interestAdd',
      component: InterestAdd
    },
    {
      path: '/dashboard/accountTypeAdd',
      name: 'accountTypeAdd',
      component: AccountTypeAdd
    },
    {
      path: '/dashboard/editAccountType/:id',
      name: 'editAccountType',
      component: AccountTypeEdit,
      props: true // Pass route params as props to the component
    },

    {
      path: '/dashboard/expesecategoryadd',
      name: 'expesecategoryadd',
      component: ExpenseCategoryAddView
    },
    {
      path: '/dashboard/expensecategory',
      name: 'expensecategory',
      component: ExpenseCategoryList
    },

    {
      path: '/dashboard/expensecategoryedit/:id',
      name: 'expensecategoryedit',
      component: ExpenseCategoryEditView,
      props: true
    },

    {
      path: '/dashboard/expense',
      name: 'expense',
      component: ExpenseListView
    },
    {
      path: '/dashboard/expenseadd',
      name: 'expenseadd',
      component: ExpenseAddView
    },
    {
      path: '/dashboard/expenseedit/:id',
      name: 'expenseedit',
      component: ExpenseEditView,
      props: true
    },

    {
      path: '/dashboard/employeeType',
      name: 'employeeType',
      component: EmployeeTypeListView
    },
    {
      path: '/dashboard/employeeTypeadd',
      name: 'employeeTypeadd',
      component: EmployeeTypeAdd
    },
    {
      path: '/dashboard//dashboard/employeeTypeEdit/:id',
      name: 'employeeTypeEdit',
      component: EmployeeTypeEditView
    },

    {
      path: '/dashboard/employee',
      name: 'employee',
      component: EmployeeListView
    },
    {
      path: '/dashboard/employeeadd',
      name: 'employeeadd',
      component: EmployeeAdd
    },
    {
      path: '/dashboard/employeeEdit/:id',
      name: 'employeeEdit',
      component: EmployeeEditView,
      props: true
      
    },

    {
      path: '/dashboard/customerList/',
      name: 'customerList',
      component: CustomerView
    },
    {
      path: '/dashboard/cardType/',
      name: 'cardType',
      component: CardTypeListView
    },
    {
      path: '/dashboard/cardAdd',
      name: 'cardAdd',
      component: CardTypeAdd
    },
    {
      path: '/dashboard/editCardType/:id',
      name: 'editCardType',
      component: CardTypeEdit,
      props: true // Pass route params as props to the component
    },
    {
      path: '/dashboard/cardDetails/',
      name: 'cardDetails',
      component: CardDetailsListView
    },
    {
      path: '/dashboard/cardDetailsAdd',
      name: 'cardDetailsAdd',
      component: CardDetailsAdd
    },
    {
      path: '/dashboard/editCardDetails/:id',
      name: 'editCardDetails',
      component: CardDetailsEdit,
      props: true // Pass route params as props to the component
    },
    {
      path: '/dashboard/branch',
      name: 'branch',
      component: BranchListView
    },
    {
      path: '/dashboard/branchAdd',
      name: 'branchAdd',
      component: BranchAddView
    },

    {
      path: '/dashboard/branchEdid/:id',
      name: 'branchEdid',
      component: BranchEditView,
      props: true
    },
  ]
})

export default router