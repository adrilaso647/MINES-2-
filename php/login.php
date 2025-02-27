<?php
//Enlazamos los ficheros a la Configuración de la Base de Datos
session_start();
include "config-db.php";

//Activamos el fichero al enviar el Usuario y Contraseña
if($_SERVER['REQUEST_METHOD']=="POST"){
    $user=$_POST['user'];
    $psw=$_POST['psw'];
//Búsqueda de Usuarios
    $stmt=$conn->prepare("SELECT id,contraseña FROM usuarios WHERE email=?");
    $stmt->bind_param("s",$correo);
    $stmt->execute();
    $stmt->store_result();
//Insertar los Datos
    if($stmt->num_rows>0){
        $stmt->blind_result($id,$hashed_psw);
        $stmt->fetch();
//Verificar Contraseña
    if(password_verify($psw,$hashed_psw)){
        $_SESSION['usuario_id']=$id;
        echo("El inicio de Sesión se ha realizado Correctamente");
    }
    }
}
?>
