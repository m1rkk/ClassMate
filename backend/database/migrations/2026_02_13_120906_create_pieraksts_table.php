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
        Schema::create('pieraksts', function (Blueprint $table) {
            $table->id("PierakstaId");

            $table->decimal('Maksa', 10, 2)->nullable();
            $table->date('Datums');
            $table->time('Laiks');
            $table->string('Tema', 100)->nullable();

            $table->foreignId('SkolotajaId')
                ->constrained('skolotajs', 'SkolotajaId');

            $table->foreignId('StudentuId')
                ->constrained('students', 'StudentuId');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
//    public function down(): void
//    {
//        Schema::dropIfExists('pieraksts');
//    }
};
