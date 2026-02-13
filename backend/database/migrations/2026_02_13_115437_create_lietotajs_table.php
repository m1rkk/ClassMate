<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lietotajs', function (Blueprint $table) {
            $table->id('LietotajaId');
            $table->string('Vards',50);
            $table->string('Uzvards',50);
            $table->string('Epasts',100)->unique();
            $table->string('AtrasanasVieta',100)->nullable();
            $table->string('Parole');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
//    public function down(): void
//    {
//        Schema::dropIfExists('lietotajs');
//    }
};
