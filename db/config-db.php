<?php
//Variables
$host="localhost";//Servidor Local
$user="root"; //Por defecto
$psw="";//Vacío por Defecto
$bbdd="mines_db";

//Conexión
$conn=new mysqli($host,$user,$psw,$bbdd);

//Comprobación de la conexión
if($conn->connect_errno){
    die("Ha ocurrido un Error al conectarse con la Base de Datos: ".$conn->connect_error);
}
?>