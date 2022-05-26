<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use App\Models\categorie;
use App\Models\marque;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class CategorieController extends Controller
{
    //
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
       
            'nom' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 409);
        }
        $categorie = new categorie();
        $categorie->nom = $request->nom;
        $categorie->user_id = 1;
   
        /*$url = "http://localhost:8000/storage/";
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $path = $request->file('image')->storeAs('public/', $categorie->id .'.'. $extension);
        $categorie->image = $path;
        $categorie->$url . $path;*/
        
       $categorie->save();

       //$categorie->save();
        return response()->json(['message' => 'le produit a est ajouter svec success']);
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
           
            'nom' => 'required',
        

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 409);
        }
        $categorie = categorie::find($request->id);
        $categorie->nom = $request->nom;
        
        $categorie->user_id = 1;
        $categorie->save();
        return response()->json(['message' => 'le produit a est mis à jour']);
    }
    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 409);
        }
        $categorie = categorie::find($request->id);
       
        $categorie->delete();
        return response()->json(['message' => 'le produit a est supprimer']);
    }
    public function show(Request $request)
    {
        session(['keys' => $request->keys]);
        $categories = categorie::where(function ($q) {
            $q->where('categories.id', 'LIKE', '%' . session('keys') . '%')
                ->orwhere('categories.nom', 'LIKE', '%' . session('keys') . '%');
        })->select('categories.*')->get();
        return response()->json(['categories' => $categories], 201);
    }
}
 /* 
  public function show(Request $request)
    {
        session(['keys' => $request->keys]);
        $products = product::where(function ($q) {
            $q->where('products.id', 'LIKE', '%' . session('keys') . '%')
                ->orwhere('products.nom', 'LIKE', '%' . session('keys') . '%')
                ->orwhere('products.prix', 'LIKE', '%' . session('keys') . '%')
                ->orwhere('products.categorie', 'LIKE', '%' . session('keys') . '%')
                ->orwhere('products.marque', 'LIKE', '%' . session('keys') . '%');
        })->select('products.*')->get();
        return response()->json(['products' => $products], 201);
    }
} */