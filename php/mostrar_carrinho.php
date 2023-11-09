<?php
$con = mysqli_connect("localhost:3306", "root", "root", "projeto_web");

$resultado = mysqli_query($con, "SELECT carrinho.id_produto, produto.nome, produto.preco FROM carrinho
JOIN produto ON carrinho.id_produto = produto.id");

$dados = array();

while ($registro = mysqli_fetch_assoc($resultado)) {
    array_push($dados, $registro);
}

echo json_encode($dados);
?>
