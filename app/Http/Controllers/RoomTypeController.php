<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomType;

class RoomTypeController extends Controller
{
    public function index()
    {
        $roomTypes = RoomType::all();

        return response()->json([
            'ok' => true,
            'roomTypes'=> $roomTypes
        ], 200);
    }
}
