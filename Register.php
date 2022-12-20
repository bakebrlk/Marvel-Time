<?php
$email=$_POST['email'];
$password=$_POST['password'];
$conn = new mysqli('localhost','root','','final');
if($conn->connect_error){
    die('COnnection Failed : '.$conn->connect_error);
}else{
    
    $stmt=$conn->prepare("insert into accounts(email,password) values(?,?)");
    $stmt->bind_param("ss",$email,$password,);
    $stmt->execute();
    
    $stmt->close();
    $conn->close();
}

?>
<!DOCTYPE html>
<html>
    <head>
    <script type="text/javascript">
setTimeout('window.location="oop.html"',1);
</script>
    </head>
</html>