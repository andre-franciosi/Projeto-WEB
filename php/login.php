<?php
$con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

// Verifique se a conexão foi estabelecida com sucesso
if (!$con) {
    die("Falha na conexão: " . mysqli_connect_error());
}

$consulta = "SELECT usuario, senha FROM usuario";


?>
