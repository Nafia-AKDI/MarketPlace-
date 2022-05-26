<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources;

use App\Models\User;
class UserController extends Controller
{
    //
    public function register(Request $request){
        $this->validate($request,[
            'name'=>'required',
            'email'=>'required',
            'password'=>'required'
        ]);
        
        $user=User::create([
            'name'=>$request->name,
            'role_id'=>2,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);
       
      //  $token=$user->createToken('auth_token')->plainTextToken;
        return response()->json(['us'=>$user]);
    
    }
  
    public function login(request $request){
        $this->validate($request,[
            
            'email'=>'required',
            'password'=>'required'
        ]);
        $user=User::whereEmail($request->email)->first();
        if (isset($user->id)) {
            if(Hash::check($request->password,$user->password)){
              /*  $token=$user->createToken('auth_token')->plainTextToken;
                return reponse()->json([
                    'message'=>'ok',
                    'token'=>$token
                ]);*/
            //    $token=$user->createToken('auth_token')->plainTextToken;
            return response()->json(['message'=>'ok', 'us'=>$user/*'message'=>'ok','id'=>$user->id,'name'=>$user->name,'role'=>$user->role_id*/]);
            }
            else{
            return response()->json([ 'message'=>2/*'message'=>'ok','id'=>$user->id,'name'=>$user->name,'role'=>$user->role_id*/]);}
        } else {
        return response()->json([ 'message'=>1/*'message'=>'ok','id'=>$user->id,'name'=>$user->name,'role'=>$user->role_id*/]);
        }
    }
    //profile connectée
    public function profile  (){
        return new UserResource(auth()->user());
    }
    public function logout(){
        auth()->user()->tokens()->delete();
        /*
        return reponse()->json([
            'message'=>'logout'
        ]);*/
        return 'ok';
    }
}
