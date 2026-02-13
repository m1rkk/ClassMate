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
        Schema::create('skolotajs', function (Blueprint $table) {
            $table->id('SkolotajaId');

            $table->integer('Pieredze')->nullable();
            $table->decimal('Ienakumi', 10, 2)->nullable();
            $table->integer('BijusoSkolenuSkaits')->nullable();
            $table->integer('EsosoSkolenuSkaits')->nullable();
            $table->integer('Reitings')->nullable();

            $table->foreignId('LietotajaId')
                ->constrained('lietotajs', 'LietotajaId')
                ->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
//    public function down(): void
//    {
//        Schema::dropIfExists('skolotajs');
//    }
};
