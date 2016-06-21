<?php  
$host = $_SERVER["HTTP_HOST"];
echo $host;
header( 'Location: https://apmui.herokuapp.com/dist/src/index.html' ) ;  
exit;
?>
