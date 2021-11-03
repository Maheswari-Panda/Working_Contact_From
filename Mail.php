<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$subject = $_POST['subject'];
$message = $_POST['$message'];

$email_from = 'msgmaheswarionlyforcode@gmail.com';
$email_subject = "new from submission";

$email_body = "User Name : $name.\n".
"Email : $email.\n"."User Number : $number.\n".
"Subject : $subject.\n"."Message : $message\n" ;

$to = 'maheswaripanda3@gmail.com';

$headers = "From : $email_from\r\n";
$headers = "Reply-to : $email\r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>