<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d');
    }


    public function posts()
    {
        return   $this->hasMany(Post::class);
    }
    // protected $casts = [
    //     'created_at' => 'date:Y-m-d',
    // ];
}
