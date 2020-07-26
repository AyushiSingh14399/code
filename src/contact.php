<?php
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$text=$_REQUEST['text'];

if(empty($name)||empty($email) || empty($text))
{
    echo "Please Fill all the fields";
}
else{
mail("ayushisingh14399@gmail.com"," Webtech Message",$text,"From: $name <$email>");
echo "<script type='text/javascript'>alert('your message sent sucessfully');
window.history.log(-1);

</script>";
}


?>