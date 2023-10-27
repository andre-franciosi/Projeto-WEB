<?php
    $con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

    if (!$con) {
        $response = array('message' => 'Erro na conexão com o banco de dados');
    } else {
        if (isset($_POST['nome'])) {
            $nome = $_POST['nome'];
            
            // Verifique se o produto com o nome fornecido existe
            $query = "SELECT id FROM produto WHERE nome = '$nome'";
            $result = mysqli_query($con, $query);

            if (mysqli_num_rows($result) == 1) {
                // Produto encontrado, exclua-o
                $query = "DELETE FROM produto WHERE nome = '$nome'";
                if (mysqli_query($con, $query)) {
                    $response = array('message' => 'Produto excluído com sucesso');
                } else {
                    $response = array('message' => 'Erro ao excluir o produto');
                }
            } else {
                $response = array('message' => 'Produto não encontrado');
            }
        } else {
            $response = array('message' => 'Nome do produto não fornecido');
        }
    }

    echo json_encode($response);
?>
