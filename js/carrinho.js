window.onload = async function () {
    var promise = await fetch("../php/mostrar_carrinho.php", {
        method: "GET"
    });

    var dados = await promise.json();
    console.log(dados);

    var total = 0;

    for (var i = 0; i < dados.length; i++) {
        var conteudo = `
        <div class="card">
            <h3>${dados[i].nome}</h3>
            <p>Preço: R$${dados[i].preco}</p>
        </div>`;

        total += parseFloat(dados[i].preco);
        document.getElementById('produtos-carrinho').innerHTML += conteudo;
    }

    var totalContainer = document.getElementById('total-carrinho');
    totalContainer.textContent = "Preço Total: R$" + total.toFixed(2);

    var limparCarrinhoButton = document.getElementById('limpar-carrinho');
    limparCarrinhoButton.addEventListener('click', function () {
        limparCarrinho();
    });
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function limparCarrinho() {
    fetch("../php/limpar_carrinho.php", {
        method: "GET"
    })
    .then(function(response) {
        if (response.ok) {
            // Se a solicitação for bem-sucedida (carrinho foi limpo), você pode atualizar a interface do usuário.
            document.getElementById('produtos-carrinho').innerHTML = ""; // Limpa a lista de produtos no carrinho
            document.getElementById('total-carrinho').textContent = "Preço Total: R$0.00"; // Atualiza o preço total para zero
        } else {
            // Se ocorrer um erro na solicitação, você pode tratar o erro de acordo com suas necessidades.
            console.error("Erro ao limpar o carrinho: " + response.statusText);
        }
    })
    .catch(function(error) {
        // Trate erros de rede ou outras falhas na solicitação.
        console.error("Erro na solicitação: " + error);
    });
}


