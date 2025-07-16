<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',  // Assurez-vous que cette ligne est présente
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
    // Middleware global
    $middleware->append(\Illuminate\Http\Middleware\HandleCors::class);
    
    // Groupes de middleware
    $middleware->web(append: [
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ]);
    
    $middleware->api(prepend: [
        \Illuminate\Http\Middleware\HandleCors::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ]);
})
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();