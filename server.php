<?php

// Collect form data
$name = $_POST['input-1'];
$email = $_POST['input-2'];
$company = $_POST['input-3'];
$message = $_POST['textarea'];

// Set the recipient email address
$to = 'contact@étiquette-illustrée.fr';

// Set the email subject and message body
$subject = 'Message from contact form';
$body = "Name: $name\nEmail: $email\nCompany: $company\nMessage:\n$message";

// Send the email
mail($to, $subject, $body);



?>
