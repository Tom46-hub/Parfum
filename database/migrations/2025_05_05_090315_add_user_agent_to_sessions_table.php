<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('sessions', function (Blueprint $table) {
        $table->text('user_agent')->after('ip_address');  // Ajoute la colonne `user_agent` après `ip_address`
    });
}


    /**
     * Reverse the migrations.
     */
    public function down()
{
    Schema::table('sessions', function (Blueprint $table) {
        $table->dropColumn('user_agent');  // Supprime la colonne `user_agent`
    });
}

};
