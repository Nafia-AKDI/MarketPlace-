<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\categorie;
use App\Models\marque;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
       
            'nom' => 'required',
            'categorie' => 'required',
            'marque' => 'required',
            'description' => 'required',
            'prix' => 'required',
           'quantite' => 'required',
            

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 409);
        }
        $product = new product();
        $product->nom = $request->nom;
        $product->categorie =$request->categorie;
        $product->marque =$request->marque;
        $categorie=categorie::where('nom',$request->categorie)->first();
        $product->categorie_id = $categorie->id;
        $product->description = $request->description;
        $marque=marque::where('nom',$request->marque)->first();
        $product->marque_id = $marque['id'] ;
        $product->user_id = 1;
        $product->quantite = $request->quantite;
        $product->prix =intVal($request->prix) ;
        /*$url = "http://localhost:8000/storage/";
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $path = $request->file('image')->storeAs('public/', $product->id .'.'. $extension);
        $product->image = $path;
        $product->$url . $path;*/
        $path =$request->image->store('image');
       $url = "http://localhost:8000/storage/";
      // $product->image = $path;
       $product->image=$url.$path;
       $product->save();

        $product->save();
        return response()->json(['message' => 'le produit a est ajouter svec success']);
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'nom' => 'required',
            'categorie' => 'required',
            'marque' => 'required',
            'description' => 'required',
            'prix' => 'required',
            'quantite' => 'required',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 409);
        }
        $product = product::find($request['id']);
        //$product = product::find();
        $product->nom = $request->nom;
        $categorie=categorie::where('nom',$request->categorie)->first();
        $product->categorie_id  = $categorie->id ;
        $product->description = $request->description;
        $product->categorie=$request->categorie;
        $product->marque =$request->marque;
        $marque=marque::where('nom',$request->marque)->first();
        $product->marque_id  =$marque->id ;
        $product->prix = $request->prix;
        $product->quantite = $request->quantite;
        $product->user_id = 1;
        $product->save();
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
        $product = product::find($request->id);
        Storage::disk('public')->delete($product->image);
        $product->delete();
        return response()->json(['message' => 'le produit a est supprimer']);
    }
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
}
