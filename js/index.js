document.addEventListener('DOMContentLoaded', function() {
    const senhaInput = document.querySelector('#senha');
    const toggleSenhaButton = document.querySelector('#toggle-senha');

    toggleSenhaButton.addEventListener('click', function() {
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text'; // Alterna para tipo de texto para mostrar a senha
            toggleSenhaButton.innerHTML = '<i class="far fa-eye-slash fa-2x"></i>'; // Muda o ícone para "olho fechado"
        } else {
            senhaInput.type = 'password'; // Alterna de volta para tipo de senha
            toggleSenhaButton.innerHTML = '<i class="far fa-eye fa-2x"></i>'; // Muda o ícone para "olho aberto"
        }
    });
});


const isAuthenticated = true; // Defina isso com base no status de autenticação real

if (isAuthenticated && isAdmin) {
    const opcaoAdicional = document.querySelector('.button-opcao-adicional');
    opcaoAdicional.style.display = 'inline'; // Torna a opção adicional visível para administradores
}

function login() {
    
}