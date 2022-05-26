<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MarqueController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PanierController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::group(['middleware' =>['auth:sanctum']], function () {
    Route::get('/user', function () {
        /* $user =new User();
         $user->name=$r['name'];
         $user->email=$r['email'];
         $user->password=$r['password'];
         //$user->save();*/
         return User::all();
     });
     Route::get('/us', function () {
        /* $user =new User();
         $user->name=$r['name'];
         $user->email=$r['email'];
         $user->password=$r['password'];
         //$user->save();*/
         return Auth::User();
     });
     Route::get('/logout', [UserController::class, 'logout']);

});
Route::any('add',[ProductController::class,'add']);
Route::any('update',[ProductController::class,'update']);
Route::any('delete',[ProductController::class,'delete']);
Route::any('show',[ProductController::class,'show']);
;

//-------------------------------------CATEGORIE-------------------
Route::any('addCategorie',[CategorieController::class,'add']);
Route::any('updateCategorie',[CategorieController::class,'update']);
Route::any('deleteCategorie',[CategorieController::class,'delete']);
Route::any('showCategorie',[CategorieController::class,'show']);

//------------------------------------marque---------------------
Route::any('addMarque',[MarqueController::class,'add']);
Route::any('updateMarque',[MarqueController::class,'update']);
Route::any('deleteMarque',[MarqueController::class,'delete']);
Route::any('showMarque',[MarqueController::class,'show']);

//---------------------------------panier-----------------------
Route::any('panier',[PanierController::class,'panier']);
Route::any('destroy',[PanierController::class,'destroy']);
Route::any('showpanier',[PanierController::class,'showpanier']);






Route::any('login', [UserController::class, 'login']);
Route::any('register',[UserController ::class ,'register']);