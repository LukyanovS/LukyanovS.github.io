<?
$where='totalcomander@gmail.com';
$header='message from the site';
$headers='Content-type: text; charset="utf-8"';

if (isset($_POST['send'])){
    
	$full_name=$_POST['full_name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$text=$_POST['text'];

	$messages=$text."\n".$email."\n".$tel."\n".$fio;

	if (mail($where,$header,$messages,$headers)){echo "Your message has been delivered";}
	
	}

?>