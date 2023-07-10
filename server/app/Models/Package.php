<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'id','name','event_name','applied_at','expired_at','single_price','combo_price','combo_number','status'
    ];
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
