<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('image'); 
            $table->double('prix'); 
            $table->string('categorie');
            $table->string('marque');
            $table->text('description'); 
            $table->integer('quantite');       
            $table->unsignedbigInteger('categorie_id');     
            $table->foreign('categorie_id')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedbigInteger('marque_id');
            $table->foreign('marque_id')->references('id')->on('marques')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedbigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        //
    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('products');
    }
}
