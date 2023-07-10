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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('package_id')->constrained()->onDelete('cascade');
            $table->enum('checkin',['Cổng 1','Cổng 2','Cổng 3','Cổng 4','Cổng 5']);
            $table->boolean('for_control');
            $table->string('type');
            $table->Date('exp_date');
            $table->Date('used_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
