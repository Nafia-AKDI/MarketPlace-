<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    public function categorie()
    {
    return $this->belongsTo(categorie::class);
    }
    public function panier()
    {
    return $this->belongsTo(panier::class);
    }
    public function marque()
    {
    return $this->belongsTo(marque::class);
    }
}
