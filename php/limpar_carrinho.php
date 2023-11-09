<?php
    // Conecte-se ao banco de dados
    $con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

    if (!$con) {
        die("Erro na conexão com o banco de dados: " . mysqli_connect_error());
    }

    // Limpe o carrinho (remova todos os itens do carrinho)
    $sql = "DELETE FROM carrinho";
    if (mysqli_query($con, $sql)) {
        $response = array('message' => 'Carrinho limpo com sucesso');
    } else {
        $response = array('message' => 'Erro ao limpar o carrinho: ' . mysqli_error($con));
    }

    // Feche a conexão com o banco de dados
    mysqli_close($con);

    // Defina o cabeçalho para JSON
    header('Content-Type: application/json');

    // Retorne uma resposta em formato JSON
    echo json_encode($response);
?>
