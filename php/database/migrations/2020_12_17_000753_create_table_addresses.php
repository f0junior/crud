<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableAddresses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->char('zipCode', 8);
            $table->string('street');
            $table->char('number', 4);
            $table->string('complement');
            $table->string('neighborhood');
            $table->string('city');
            $table->string('state');
            $table->unsignedBigInteger('clientId');

            $table->foreign('clientId')->references('id')->on('clients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
