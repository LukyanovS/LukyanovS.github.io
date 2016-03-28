<?php

    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone']
    $message = $_POST['message'];

    $to = "totalcomander@gmail.com";
    $subject = "From the website visitor";
    $text =  "Wrote: $name\n Contact email - $email\n\n Text of the letter: $message\n";

    $header = "Content-type: text/html; charset=utf-8\r\n";
    $header .= "MIME-Version: 1.0\r\n";

    $sending = mail($to, $subject, $text, $headers);

    if($sending) echo "Letter sent . Responses do not wait ;)";

?>