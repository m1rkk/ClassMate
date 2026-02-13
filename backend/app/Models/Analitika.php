<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analitika extends Model
{
    use HasFactory;

    protected $table = 'analitika';
    protected $primaryKey = 'AnalitikasId';

    protected $fillable = [
        'SkolotajaId',
    ];

    public function skolotajs()
    {
        return $this->belongsTo(Skolotajs::class, 'SkolotajaId');
    }
}
