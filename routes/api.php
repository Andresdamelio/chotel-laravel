<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('reservations', 'ReservationController@index');

Route::group(['prefix' => 'room/reservation'], function () {
    Route::get('/', 'ReservationController@index');
    Route::get('availability', 'ReservationController@checkAvailability');
    Route::post('/', 'ReservationController@store');
    Route::get('{id}', 'ReservationController@show');
    Route::put('{id}', 'ReservationController@update');
    Route::delete('{id}', 'ReservationController@destroy');
});

Route::get('roomTypes', 'RoomTypeController@index');

