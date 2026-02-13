<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atsauksme extends Model
{
    use HasFactory;

    protected $table = 'atsauksme';
    protected $primaryKey = 'AtsauksmesId';

    protected $fillable = [
        'Teksts',
        'ZvaigznuSkaits',
        'Datums',
        'SkolotajaId',
        'StudentuId',
    ];

    public function skolotajs()
    {
        return $this->belongsTo(Skolotajs::class, 'SkolotajaId');
    }

    public function students()
    {
        return $this->belongsTo(Studenti::class, 'StudentuId');
    }
}
