<?php

    if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $tel = $_POST["tel"];
        $flaws = $_POST["flaws"];
        if(empty($name)){
            header("Location: index.html?error=emptyinputName#malfunction");
            exit();
        }elseif(empty($email)){
            header("Location: index.html?error=emptyinputEmail#malfunction");
            exit();
        }elseif(empty($tel)){
            header("Location: index.html?error=emptyinputTel#malfunction");
            exit();
        }elseif(empty($flaws)){
            header("Location: index.html?error=emptyinputFlaws#malfunction");
            exit();
        }else{
            header("Location: index.html?error=none#malfunction");
            die();
        }
    }

    




exit();






