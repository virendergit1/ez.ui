<?php  
$host = $_SERVER["HTTP_HOST"];
echo $host;
header( 'Location: https://ezui.herokuapp.com/dist/src/index.html' ) ;  
exit;
?>
