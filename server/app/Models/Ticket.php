<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_code','used_date','event_name','checkin'
    ];
    public function packages()
    {
        return $this->belongsTo(Package::class);
    }
}
