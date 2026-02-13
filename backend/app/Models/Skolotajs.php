<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skolotajs extends Model
{
    use HasFactory;
    protected $table = 'skolotajs';
    protected $primaryKey = 'SkolotajaId';

    protected $fillable = [
        'Pieredze',
        'Ienakumi',
        'BijusoSkolenuSkaits',
        'EsosoSkolenuSkaits',
        'Reitings',
        'LietotajaId',
    ];
    public function lietotajs(){
        return $this->belongsTo(Lietotajs::class, 'LietotajaId');
    }
    public function students(){
        return $this->belongsToMany(Studenti::class,
            'skolotajs_studenti',
            'SkolotajaId', 'StudentuId');
    }
    public function analitika(){
        return $this->hasOne(Analitika::class, 'SkolotajaId');
    }
    public function pieraksti(){
        return $this->hasMany(Pieraksts::class, 'SkolotajaId');
    }
    public function atsauksmes(){
        return $this->hasMany(Atsauksme::class, 'SkolotajaId');
    }
}
