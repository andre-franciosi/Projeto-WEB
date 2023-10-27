async function login() {
    console.log("Entrar apertado")

    var form = document.getElementById('form-login')
    var dados = new FormData(form)

    var promise = await fetch("../php/login.php",{
        method: "POST",
        body: dados
    })

    var resposta = await promise.json()
    alert(resposta)
    
    if (resposta == "Login bem-sucedido como administrador"){
        console.log("Admin logado")
    }

    var elementToToggle = document.querySelector('.button-add')

    if (elementToToggle.style.display === 'none' || elementToToggle.style.display === '') {
        elementToToggle.style.display = 'inline'; 
    } else {
        elementToToggle.style.display = 'none'; // Mude de volta para 'none' para ocultar o elemento
    }
}

async function cadastrar(){
    var form = document.getElementById('form-cadastro')
    var dados = new FormData(form)
    
    var promise = await fetch("../php/cadastrar.php", {
        method: "POST",
        body: dados
    })

    var resposta = await promise.json()
    alert(resposta)
}

function excluir() {
    var form = document.getElementById('form-excluir')
    var dados = new FormData(form)


    fetch("../php/excluir.php", {
        method: "POST",
        body: dados
    })
}


window.onload = async function () {
    var promise = await fetch("./php/mostrar.php", {
        method: "GET"
    });

    var dados = await promise.json();
    console.log(dados);

    for (var i = 0; i < dados.length; i++) {
        var conteudo = `
        <div class="card">
            <img class="img-hover" src="data:image/png;base64,${dados[i].imagem}" alt="Produto">
            <h3>${dados[i].nome}</h3>
            <p>Preço: R$${dados[i].preco}</p>
            <button class="btn-add-to-cart">Adicionar ao Carrinho</button>
        </div>`;

        document.getElementById('produtos').innerHTML += conteudo;
    }
}
