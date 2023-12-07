<?php
        $name = $_POST["name"];
        $email = $_POST["email"];
        $tel = $_POST["tel"];
        $message = $_POST["flaws"];
        $to = "zabkarabka506@gmail.com";
        $from = "From: $email \n Tel: $tel \n + $name";
        $subject = "You just got a mail from your site $from";

        if(empty($name)){
            header("Location: index.html?error=emptyinputName#malfunction");
            exit();
        }elseif(empty($email)){
            header("Location: index.html?error=emptyinputEmail#malfunction");
            exit();
        }elseif(empty($tel)){
            header("Location: index.html?error=emptyinputTel#malfunction");
            exit();
        }elseif(empty($message)){
            header("Location: index.html?error=emptyinputFlaws#malfunction");
            exit();
        }else{
            mail($to, $subject, $message);
            header("Location: index.html?error=none#malfunction");
            exit();
            
        }
  

    



?>







