<?php

    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $to = "et-imp@mail.ru";
    $subject = "From the website visitor";
    $text =  "Wrote: $name\n Contact email - $email\n\n Text of the letter: $message\n";

    $headers = "Content-type: text/html; charset=utf-8\r\n";
    $sending = mail($to, $subject, $text, $header);

    if($sending) echo "Letter sent . Responses do not wait ;)";

?>