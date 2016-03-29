<?php

    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $to = "et-imp@mail.ru";
    $subject = "From the website visitor";
    $text =  "Wrote: $name\n Contact email - $email\n\n Text of the letter: $message\n";

    //$header = "Content-type: text/html; charset=utf-8\r\n";
    //$header .= "MIME-Version: 1.0\r\n";
    $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    mail("totalcomander@gmail.com", $subject, "привет мир", $headers);
    //$sending = mail($to, $subject, $text, $header);

    //if($sending) echo "Letter sent . Responses do not wait ;)";

?>