<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $with = ['room'];

    protected $fillable = ['client_name', 'check_in_at', 'check_out_at', 'room_type_id'];

    public function room()
    {
        return $this->belongsTo('App\Models\RoomType', 'room_type_id');
    }
}