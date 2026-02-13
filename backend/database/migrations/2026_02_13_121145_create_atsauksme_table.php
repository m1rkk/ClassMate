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
        Schema::create('atsauksme', function (Blueprint $table) {
            $table->id('AtsauksmesId');

            $table->string('Teksts', 255)->nullable();
            $table->integer('ZvaigznuSkaits');
            $table->date('Datums')->nullable();

            $table->foreignId('SkolotajaId')
                ->constrained('skolotajs', 'SkolotajaId');

            $table->foreignId('StudentaId')
                ->constrained('students', 'StudentuId');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('atsauksme');
    }
};
