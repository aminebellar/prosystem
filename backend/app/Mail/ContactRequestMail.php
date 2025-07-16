<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Créer une nouvelle instance du message.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Construire le message.
     */
    public function build()
    {
        return $this->subject($this->data['subject'] ?? 'Nouveau message de contact')
                    ->view('emails.contact')
                    ->with('data', $this->data);
    }
}
