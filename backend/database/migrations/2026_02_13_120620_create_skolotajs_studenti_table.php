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
        Schema::create('skolotajs_studenti', function (Blueprint $table) {
            $table->id("SkolotajsStudentuId");

            $table->foreignId('SkolotajaId')
                ->constrained('skolotajs', 'SkolotajaId')
                ->cascadeOnDelete();

            $table->foreignId('StudentuId')
                ->constrained('students', 'StudentuId')
                ->cascadeOnDelete();

            $table->unique(['SkolotajaId', 'StudentuId']);
        });
    }

    /**
     * Reverse the migrations.
     */
//    public function down(): void
//    {
//        Schema::dropIfExists('skolotajs_studenti');
//    }
};
