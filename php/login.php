<?php
    $con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

    $username = $_POST["username"];
    $password = $_POST["password"];

    if (!$con) {
        $response = array('message' => 'Erro na conexão com o banco de dados');
    } else {
        // Consulta SQL para verificar o login
        $query = "SELECT * FROM usuario WHERE usuario = '$username' AND senha = '$password'";
        $result = mysqli_query($con, $query);

        if (mysqli_num_rows($result) == 1) {
            // Login bem-sucedido
            $user = mysqli_fetch_assoc($result);
            
            // Verifique se o usuário é administrador
            if ($user['usuario'] === 'admin') {
                $response = "Login bem-sucedido como administrador";
            } else {
                $response = "Login bem-sucedido como usuário comum";
            }
        } else {
            // Nome de usuário ou senha incorretos
            $response = "Nome de usuário ou senha incorretos. Tente novamente";
        }
    }

    $json = json_encode($response);
    echo $json;
?>
