<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class TicketController extends Controller
{
    //
    public function index () {
        $tickets = Ticket::join('packages','packages.id','tickets.package_id')->select('tickets.*','event_name','packages.id as  booking_code')->get();
        if($tickets->count() > 0) {
              return response()->json([
                  'status'=>200,
                   'tickets'=>$tickets
              ],200);
        }
    }
    public function Search ($id) {

        if (!$id) {
            return response()->json([
                'status' => 'error',
                'message' => 'Id is empty'
            ], 400);
        }
        $ticket = Ticket::where('id',$id)->first();
        if(!$ticket) {
            return response()->json([
                'status' => 'error',
                'message' => 'Not Found'
            ], 404);
        }
        return response()->json([
            'status' => 'error',
            'tickets' => [$ticket]
        ], 200);
   }
    public function Sort (Request $request) {

        $validator = Validator::make($request->all(),[
            'createdAt'=>'required|string',
            'expiredAt'=>'required|string',
            'status'=>'required|in:Unused,Used,All,Expired',
            'checkin'=>'required|string'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }
//       'createdAt')))
//
        $tickets = Ticket::join('packages','packages.id','=','tickets.package_id')
        ->select('tickets.*','tickets.created_at as created_at','tickets.updated_at as updated_at','name','packages.id as booking_code','event_name')->where('tickets.created_at','>=',date($request->get('createdAt')))->where('exp_date','<=',date($request->get('expiredAt'))); ;
        if($request->input('status')=='Used') {
            $tickets->where('used_date','!=',date('0000-00-00'));
            return response()->json([
                'status'=>200,
                'tickets'=>$tickets->get()
            ],200);
        }
        if($request->input('status')=='Expired') {
            $tickets->where('used_date','=',date('0000-00-00'))->where('exp_date','<',date('Y-m-d'));
            return response()->json([
                'status'=>200,
                'tickets'=>$tickets->get()
            ],200);
        }
        if($request->input('status')=='Unused') {
            $tickets->where('used_date','=',date('0000-00-00'))->where('exp_date','<',date('Y-m-d'));
            return response()->json([
                'status'=>200,
                'tickets'=>$tickets->get()
            ],200);
        }
        return response()->json([
            'status'=>200,
            'tickets'=>$tickets->get()
        ],200);

    }

    public function ForControl (Request $request) {
        $validator = Validator::make($request->all(),[
            'createdAt'=>'required|string',
            'expiredAt'=>'required|string',
            'status'=>'required|in:All,Check,UnCheck',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }
        $tickets = Ticket::join('packages','packages.id','=','tickets.package_id')
            ->select('tickets.*','tickets.created_at as created_at','tickets.updated_at as updated_at','name','packages.id as booking_code','event_name')->where('tickets.created_at','>=',date($request->get('createdAt')))->where('exp_date','<=',date($request->get('expiredAt'))); ;

        if($request->input('status')=='Check') {
            $tickets->where('for_control','=',1);
            return response()->json([
                'status'=>200,
                'tickets'=>$tickets->get()
            ],200);
        }
        if($request->input('status')=='Uncheck') {
            $tickets->where('for_control','=',0);
            return response()->json([
                'status'=>200,
                'tickets'=>$tickets->get()
            ],200);
        }
        return response()->json([
            'status'=>200,
            'tickets'=>$tickets->get()
        ],200);
    }

    public function Chart (Request $request) {
        $validator = Validator::make($request->all(),[
            'time'=>'required|string',
        ]);
        $week1 = Ticket::join('packages','packages.id','=','tickets.package_id')->whereMonth('used_date','=',Carbon::parse($request->input('time'))->format('m'))->whereDay('used_date','<','7')->select('single_price')->sum('single_price');
        $week2 = Ticket::join('packages','packages.id','=','tickets.package_id')->whereMonth('used_date','=',Carbon::parse($request->input('time'))->format('m'))->whereDay('used_date','<','15')->whereDay('used_date','>','7')->select('single_price')->sum('single_price');
        $week3 = Ticket::join('packages','packages.id','=','tickets.package_id')->whereMonth('used_date','=',Carbon::parse($request->input('time'))->format('m'))->whereDay('used_date','<','22')->whereDay('used_date','>','14')->select('single_price')->sum('single_price');
        $week4 = Ticket::join('packages','packages.id','=','tickets.package_id')->whereMonth('used_date','=',Carbon::parse($request->input('time'))->format('m'))->whereDay('used_date','<','29')->whereDay('used_date','>','21')->select('single_price')->sum('single_price');
        $total = Ticket::join('packages','packages.id','=','tickets.package_id')->whereMonth('used_date','=',Carbon::parse($request->input('time'))->format('m'))->select('single_price')->sum('single_price');
        return response()->json([
            'status'=>200,
            'week1'=>$week1,
            'week2'=>$week2,
            'week3'=>$week3,
            'week4'=>$week4,
            'total'=>$total
        ],200);
    }

}
