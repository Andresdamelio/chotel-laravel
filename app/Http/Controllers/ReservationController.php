<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Reservation;
use Carbon\Carbon;

class ReservationController extends Controller
{

    public function index()
    {
        $reservations = Reservation::all();

        return $this->json(true, 200, "reservations", $reservations);
    }


    public function store(Request $request)
    {
        $validator = $this->validator($request);

        if ($validator->fails()) {
            return $this->json(false, 400, "errors", $validator->errors());
        }

        $reservation = Reservation::create($request->all());

        return $this->json(true, 201, "reservation", $reservation);
    }


    public function show($id)
    {
        $reservation = Reservation::find($id);

        if($reservation) {
            return $this->json(true, 200, "reservation", $reservation);
        }

        return $this->json(false, 404, "error", "A reservation with the specified id was not found");
    }


    public function update(Request $request, $id)
    {

        $validator = $this->validator($request);

        if ($validator->fails()) {
            return $this->json(false, 400, "errors", $validator->errors());
        }

        $reservation = Reservation::find($id);

        if($reservation) {
            $reservation->update($request->all());

            $reservations = Reservation::all();

            return $this->json(true, 200, "reservations", $reservations);
        }

        return $this->json(false, 404, "error", "A reservation with the specified id was not found");
    }


    public function destroy($id)
    {
        $reservation = Reservation::find($id);

        if($reservation) {

            if(Carbon::now()->diffInDays(Carbon::create($reservation->check_out_at), false) < 0 ) {
                return $this->json(false, 400, "error", "The reservation you are trying to delete is expired");
            }

            $reservation->delete();

            $reservations = Reservation::all();

            return $this->json(true, 200, "reservations", $reservations);
        }

        return $this->json(false, 404, "error", "A reservation with the specified id was not found");
    }

    public function checkAvailability(Request $request) {

        $validator = $this->validateAvailability($request);

        if ($validator->fails()) {
            return $this->json(false, 400, "errors", $validator->errors());
        }

        $reservations = $this->totalReservationsByType($request);

        return $this->json(true, 200, "total", $reservations);
    }

    public function totalReservationsByType($request)
    {
        $reservations = Reservation::where('room_type_id', '=', $request->room_type_id)
            ->where('check_in_at', '<=', Carbon::create($request->check_in_at))
            ->where('check_out_at', '>=', Carbon::create($request->check_out_at))->count();

        return 5 - $reservations;
    }

    public function validator($request)
    {
        return Validator::make($request->all(), [
            'client_name' => 'required|max:60',
            'room_type_id' => 'required|integer',
            'check_in_at' => 'required|date|after:today',
            'check_out_at' => 'required|date|after_or_equal:check_in_at',
        ]);
    }

    public function validateAvailability($request)
    {
        return Validator::make($request->all(), [
            'room_type_id' => 'required|integer',
            'check_in_at' => 'required|date|after:today',
            'check_out_at' => 'required|date|after_or_equal:check_in_at',
        ]);
    }

    public function json($status, $code, $data, $response)
    {
        return response()->json([
            "ok" => $status,
            $data => $response,
        ], $code);
    }
}
