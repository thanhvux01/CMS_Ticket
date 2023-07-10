<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PackageController extends Controller
{
    //
    public function index () {
        $packages = Package::all();
        if($packages->count() > 0) {
            return response()->json([
                'status'=>200,
                'packages'=>$packages
            ],200);
        }
    }
    public  function  createPackage (Request $request) {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'applied_at'=>'string',
            'status'=>'required|in:Active,Inactive',
            'single_price' => 'required|numeric|min:0',
            'combo_price' => 'numeric|min:0',
            'combo_number' => 'numeric|min:0',
            'event_name' => 'string|max:255'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }
         $package = new Package();
          $package->name = $request->input('name');
          $package->applied_at = date($request->input('applied_at'));
          $package->expired_at = date($request->input('expired_at'));
          $package->single_price = $request->input('single_price');
          $package->combo_price = $request->input('combo_price');
          $package->combo_number = $request->input('combo_number');
          $package->status = $request->input('status');
          $package->event_name = $request->input('event_name');
          $package->save();

             return response()->json([
                 'status'=>200,
                 'package'=>$package
             ],200);
    }

    public function updatePackage (Request $request)  {
        $validator = Validator::make($request->all(),[
            'id'=>'required',
            'name'=>'required|string|max:255',
            'applied_at'=>'string',
            'status'=>'required|in:Active,Inactive',
            'single_price' => 'required|numeric|min:0',
            'combo_price' => 'numeric|min:0',
            'combo_number' => 'numeric|min:0',
            'event_name' => 'string|max:255'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $package = Package::where('id',$request->input('id'))->first();
        if($package->count() == 0) {
            return response()->json([
                'status' => 'error',
                'message' => 'package not found'
            ], 404);
        }
        $package->name = $request->input('name');
        $package->applied_at = date($request->input('applied_at'));
        $package->expired_at = date($request->input('expired_at'));
        $package->single_price = $request->input('single_price');
        $package->combo_price = $request->input('combo_price');
        $package->combo_number = $request->input('combo_number');
        $package->status = $request->input('status');
        $package->event_name = $request->input('event_name');
        $package->save();

        return response()->json([
            'status' => '200',
            'package' =>  $package
        ], 200);

    }
}
