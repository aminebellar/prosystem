<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactRequestMail;


class ContactController extends Controller
{
   public function send(Request $request)
{
    $data = $request->validate([
        'name' => 'required|string',
        'company' => 'nullable|string',
        'email' => 'required|email',
        'phone' => 'nullable|string',
        'service' => 'nullable|string',
        'message' => 'required|string',
    ]);

    $data['subject'] = 'Demande de contact depuis le site web';

    Mail::to('bellar1204@gmail.com')->send(new ContactRequestMail($data));

    return response()->json(['message' => 'Message envoyé avec succès']);
}
}
