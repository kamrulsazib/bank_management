<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CardController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $card = Card::orderBy('id','desc')->with('customer','cardType')->get();
        return $this->sendResponse($card,'Card Return fetched successfully');
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'card_number' => 'required',
            'customer_id' => 'required',
            'card_type_id' => 'required',
            
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $input = $request->all();
        $card = Card::create($input);
        return $this->sendResponse($card, 'Card created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $card = Card::find($id);
        return $this->sendResponse($card,'Card Return fetched successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $card = Card::find($id);
        return $this->sendResponse($card,'Card Edit successfully');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Card $card)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $card = Card::find($id)->delete();
        return $this->sendResponse($card,'Card delete successfully');
    }
}
