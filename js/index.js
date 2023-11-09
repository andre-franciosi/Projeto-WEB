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

}



function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
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

async function add_carrinho(id_produto) {
    var dados = { id_produto: id_produto }; 

    try {
        const response = await fetch("./php/add_carrinho.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(dados), 
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.error("Erro ao adicionar o produto ao carrinho.");
        }
    } catch (error) {
        console.error("Erro ao realizar a solicitação: " + error);
    }

    alert("Produto adicionado ao carrinho")
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
            <button class="btn-add-to-cart" onclick="add_carrinho(${dados[i].id})">Adicionar ao Carrinho</button>
        </div>`;

        document.getElementById('produtos').innerHTML += conteudo;
    }
}
