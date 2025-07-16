<h2>Nouvelle demande de contact</h2>

<p><strong>Nom :</strong> {{ $data['name'] }}</p>
@if(!empty($data['company']))
<p><strong>Entreprise :</strong> {{ $data['company'] }}</p>
@endif
<p><strong>Email :</strong> {{ $data['email'] }}</p>
@if(!empty($data['phone']))
<p><strong>Téléphone :</strong> {{ $data['phone'] }}</p>
@endif
@if(!empty($data['service']))
<p><strong>Service demandé :</strong> {{ $data['service'] }}</p>
@endif
<p><strong>Sujet :</strong> {{ $data['subject'] }}</p>
<p><strong>Message :</strong><br>{{ $data['message'] }}</p>
