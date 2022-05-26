<?php
/*
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PanierController extends Controller
{
    //
}
*/



namespace App\Http\Controllers;

use App\Models\categorie;
use App\Models\panier;
use App\Models\product;
use Illuminate\Http\Request;

class PanierController extends Controller
{
    public function panier(Request $request){
        $panier=new panier();
        $panier->user_id = auth('sanctum')->user()->id;
        $panier->product_id=intval($request->id);
        $panier->save();
        return response()->json(['message' => 'le produit a est ajouter au panier']);
    }
    /*public function show($id){
        $listcategorie=categorie::all();
        $list=product::all();
        $listarticle[] = new product();
        $i=0;
        foreach($list as $art){
            if($art->categorie_id==$id){
                $listarticle[$i]=product::find($art->id) ;
                $i++;
            }
           }
        return response()->json(['products' => $listarticle], 201);
        }*/
        public function showpanier(){
            $listpanier = panier::all();
            $list=array();
            $i=0;
           foreach($listpanier as $panier){
            $id1=$panier->product_id;
            if($panier->user_id== auth('sanctum')->user()->id){
                $article =product::find($id1);
                $list[$i]=$article;
                $i++;
            }
           }
           return response()->json(['products' => $list], 201);
            }
            public function destroy(Request $request){
                $listpanier = panier::all();
               foreach($listpanier as $panier){
                if($panier->product_id==$request->id){
                    $panier->delete();
                }
               }
               return response()->json(['message' => 'le produit a est supprimer du panier']);
                }
            }