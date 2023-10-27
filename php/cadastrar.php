<?php
$con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

$nome = $_POST["nome"];
$preco = $_POST["preco"];

$arquivo = $_FILES["foto"];

// Verifique se o arquivo é do tipo PNG
if ($arquivo['type'] == 'image/png') {
    $imagem = file_get_contents($arquivo['tmp_name']);
    $imagem_base64 = base64_encode($imagem);

    if (!$con) {
        $response = "Erro na conexão com o banco de dados";
    } else {
        $query = "INSERT INTO produto (nome, preco, imagem) VALUES ('$nome', '$preco', '$imagem_base64')";
    
        if (mysqli_query($con, $query)) {
            $response = "Produto cadastrado com sucesso";
        } else {
            $response = "Erro ao cadastrar o produto";
        }
    }
} else {
    $response = "Somente arquivos no formato PNG são permitidos";
}

$json = json_encode($response);
echo $json;
?>
