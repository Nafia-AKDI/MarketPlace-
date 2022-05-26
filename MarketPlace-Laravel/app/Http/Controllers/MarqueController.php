<?php

namespace App\Http\Controllers;
use App\Models\marque;
use Illuminate\Http\Request;
use App\Models\product;
use App\Models\categorie;


use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class MarqueController extends Controller
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
        $marque = new marque();
        $marque->nom = $request->nom;
        $marque->user_id = 1;
   
        /*$url = "http://localhost:8000/storage/";
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $path = $request->file('image')->storeAs('public/', $marque->id .'.'. $extension);
        $marque->image = $path;
        $marque->$url . $path;*/
      
      // $marque->image = $path;
      
       $marque->save();

       //$marque->save();
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
        $marque = marque::find($request->id);
        $marque->nom = $request->nom;
        
        $marque->user_id = 1;
        $marque->save();
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
        $marque = marque::find($request->id);
       
        $marque->delete();
        return response()->json(['message' => 'le produit a est supprimer']);
    }
    public function show(Request $request)
    {
        session(['keys' => $request->keys]);
        $marques = marque::where(function ($q) {
            $q->where('marques.id', 'LIKE', '%' . session('keys') . '%')
                ->orwhere('marques.nom', 'LIKE', '%' . session('keys') . '%');
        })->select('marques.*')->get();
        return response()->json(['marques' => $marques], 201);
    }
}
