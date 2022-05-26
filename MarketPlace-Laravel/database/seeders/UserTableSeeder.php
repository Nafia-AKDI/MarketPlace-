<?php

namespace Database\Seeders;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin = Role::where('name', 'admin')->first();
        $admin = new User();
        $admin->name = 'Achraf';
        $admin->email = 'achraf@admin.com';
        $admin->password = bcrypt('achraf');
        $admin->role_id = $role_admin['id'];
        $admin->save();
        $admin2 = new User();
        $admin2->name = 'Nafie';
        $admin2->email = 'nafie@admin.com';
        $admin2->password = bcrypt('nafie');
        $admin2->role_id = $role_admin['id'];
        $admin2->save();
        //
    }
}
