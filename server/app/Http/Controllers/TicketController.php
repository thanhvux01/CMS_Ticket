<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    //
    public function index () {
        $tickets = Ticket::all();
        if($tickets->count() > 0) {
              return response()->json([
                  'status'=>200,
                   'tickets'=>$tickets
              ],200);
        }
    }
}
