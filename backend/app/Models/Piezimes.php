<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Piezimes extends Model
{
    use HasFactory;

    protected $table = 'piezimes';
    protected $primaryKey = 'PiezimesId';

    protected $fillable = [
        'Teksts', 'Datums', 'SkolotajaId', 'StudentuId'
    ];

    public function skolotajs(){
        return $this->belongsTo(Skolotajs::class, 'SkolotajaId');
    }
    public function students(){
        return $this->belongsTo(Studenti::class, 'StudentuId');
    }
}
