<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Laravel\Prompts\password;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password'=>becri
        // ]);
        User::create([
            'name' => 'admin',
            'email' => 'admin@hmail.com',
            'password' => bcrypt(12345678),
        ]);

        $this->call(AccountTypeSeeder::class);
    }
}
