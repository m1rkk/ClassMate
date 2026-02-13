<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pieraksts extends Model
{
    use HasFactory;
    protected $table = 'pieraksts';
    protected $primaryKey = 'PierakstaId';

    protected $fillable = [
        'Maksa',
        'Datums',
        'Laiks',
        'Tema',
        'SkolotajaId',
        'StudentuId',
    ];

    public function skolotajs(){
        return $this->belongsTo(Skolotajs::class, 'SkolotajaId');
    }
    public function students(){
        return $this->belongsTo(Studenti::class, 'StudentuId');
    }
}
