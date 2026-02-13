<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lietotajs extends Model
{
    use HasFactory;

    protected $table = 'lietotajs';
    protected $primaryKey = 'LietotajaId';

    protected $fillable = [
        'Vards', 'Uzvards', 'Epasts', 'AtrasanasVieta', 'Parole',
    ];

    protected $hidden = ['Parole'];

    public function skolotajs()
    {
        return $this->hasOne(Skolotajs::class, 'LietotajaId');
    }
    public function students()
    {
        return $this->hasOne(Studenti::class, 'LietotajaId');
    }

}
