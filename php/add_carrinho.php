<?php
$con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

if (!$con) {
    $response = array('message' => 'Erro na conexão com o banco de dados');
} else {
    $data = json_decode(file_get_contents('php://input'), true); 
    $id_produto = $data["id_produto"];

    $sql = "SELECT * FROM produto WHERE id = $id_produto";
    $result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        $sql = "INSERT INTO carrinho (id_produto) VALUES ($id_produto)";
        if (mysqli_query($con, $sql)) {
            $response = array('message' => 'Produto adicionado ao carrinho com sucesso');
        } else {
            $response = array('message' => 'Erro ao adicionar o produto ao carrinho: ' . mysqli_error($con));
        }
    } else {
        $response = array('message' => 'Produto não encontrado no banco de dados');
    }

    mysqli_close($con);
}

header('Content-Type: application/json'); 
echo json_encode($response);
?>
