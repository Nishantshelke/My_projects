<?php
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $time = $_POST['time'];

        $conn = new mysqli('localhost','root','','visit');
        if($conn->connect_error){
            die('Connection Failed : '.$conn->connect_error);
        }else{
            $stmt= $conn->prepare("insert into visitform(name, mobile, time)
                values(?, ?, ?)");
            $stmt->bind_param("sis",$name, $mobile, $time);
            $stmt->execute();
            echo"registration Successfully...";
            $stmt->close();
            $conn->close();
        }
    ?>