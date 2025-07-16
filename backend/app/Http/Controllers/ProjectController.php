<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return response()->json(Project::all());
    }

    public function show($id)
    {
        return response()->json(Project::findOrFail($id));
    }
    
    // ... autres méthodes CRUD
}