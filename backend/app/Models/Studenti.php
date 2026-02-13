<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studenti extends Model
{
    use HasFactory;

    protected $table = 'students';
    protected $primaryKey = 'StudentuId';

    protected $fillable = [
        'LietotajaId'
    ];

    public function lietotajs(){
        return $this->belongsTo(Lietotajs::class, 'LietotajaId');
    }

    public function skolotajs(){
        return $this->belongsToMany(Skolotajs::class,
            'skolotajs_studenti',
            'StudentuId', 'SkolotajaId');
    }

    public function piezime(){
        return $this->hasMany(Piezimes::class, 'StudentuId');
    }
    public function pieraksti(){
        return $this->hasMany(Pieraksts::class, 'StudentuId');
    }
    public function atsauksmes()
    {
        return $this->hasMany(Atsauksme::class, 'StudentuId');
    }
}
