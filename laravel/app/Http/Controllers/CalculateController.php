<?php

namespace App\Http\Controllers;

use App\Models\Calculate;
use App\Models\CashDeposit;
use App\Models\Customer;
use App\Models\Loan;
use App\Models\Payment;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Carbon\Carbon;

class CalculateController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Calculate=Calculate::sum('amount');
        $Withdrawal=Withdrawal::sum('deposit_amount');
        $CashDeposit=CashDeposit::sum('amount');
        $Payment=Payment::sum('amount');
        $Loan=Loan::sum('amount');
        $Customer=Customer::count();

        $today = Carbon::today();
        $todaysWithdrawal = Withdrawal::whereDate('created_at', $today)->sum('deposit_amount');
        $todaysCashDeposit = CashDeposit::whereDate('created_at', $today)->sum('amount');
        $todaysPayment = Payment::whereDate('created_at', $today)->sum('amount');
        $todaysLoan = Loan::whereDate('created_at', $today)->sum('amount');
        $data=[
            'Calculate'=>$Calculate,
            'Withdrawal'=>$Withdrawal,
            'CashDeposit'=> $CashDeposit,
            'Loan'=>$Loan,
            'Payment'=>$Payment,
            'Customer'=>$Customer,

            'todaysWithdrawal'=>$todaysWithdrawal,
            'todaysCashDeposit'=>$todaysCashDeposit,
            'todaysPayment'=>$todaysPayment,
            'todaysLoan'=>$todaysLoan,
        ];
        return $this->sendResponse($data,'amount Fetched Successfully');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Calculate $calculate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Calculate $calculate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Calculate $calculate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Calculate $calculate)
    {
        //
    }
}
