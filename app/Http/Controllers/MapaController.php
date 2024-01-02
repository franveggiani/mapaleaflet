<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MapaController extends Controller
{
    public function index () {

        return view('welcome');

    }

    public function inicio () {

        return view('mapa.inicio');

    }
}
