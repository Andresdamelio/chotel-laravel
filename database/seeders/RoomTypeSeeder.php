<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('room_types')->insert([
            ['name' => "Familiar", 'quantity_bed' => 3, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => "Doubles", 'quantity_bed' => 2, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => "Singles", 'quantity_bed'=> 1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ]);

        DB::table('reservations')->insert([
            ['client_name' => "Andres", 'room_type_id' => 1, 'check_in_at' => Carbon::create("2020-09-10"),  'check_out_at' => Carbon::create("2020-09-12")],
            ['client_name' => "Ana", 'room_type_id' => 1, 'check_in_at' => Carbon::create("2020-09-20"), 'check_out_at' => Carbon::create("2020-09-22")],
            ['client_name' => "Jose", 'room_type_id'=> 2, 'check_in_at' => Carbon::create("2020-09-19"), 'check_out_at' => Carbon::create("2020-09-23")],
        ]);
    }
}
