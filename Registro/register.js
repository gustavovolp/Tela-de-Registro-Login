let listUser = [];
let listPass = [];

// Adiciona o formulario
const registerContForm = document.getElementById('registerContForm');

const passValidate = document.getElementById('password');

//senha visivel//
document.getElementById('togglePasswordRegister').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

//validação de senha//
passValidate.addEventListener('input', function() {
    const password = passValidate.value;    
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    let errorMessage = '';

    if (password.length < minLength) {
        errorMessage += `A senha deve ter pelo menos ${minLength} caracteres.\n`;
    }
    if (!hasUpperCase) {
        errorMessage += 'A senha deve conter pelo menos uma letra maiúscula.\n';
    }
    if (!hasLowerCase) {
        errorMessage += 'A senha deve conter pelo menos uma letra minúscula.\n';
    } 
    if (!hasNumber) {
        errorMessage += 'A senha deve conter pelo menos um número.\n';
    }
    if (!hasSpecialChar) {
        errorMessage += 'A senha deve conter pelo menos um caractere especial.\n';
    }

    if (errorMessage) {
        passValidate.setCustomValidity(errorMessage);
    } else {
        passValidate.setCustomValidity('');
    }
});

//caso der tudo certo o submit vai ser enviado vai ter um alerta que a conta foi criada dizendo seu login e senha//
    registerContForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    listUser.push(username);
    listPass.push(password);

    console.log(listUser);
    console.log(listPass);
    
    const login = document.getElementById('btnRegister');
    login.addEventListener('click', function() {
    document.querySelector('.step-1').style.display = 'none';
    document.querySelector('.step-2').style.display = 'flex';

    setTimeout(() => {
        
    }, 1000);

    alert('Conta criada com sucesso! \nSeu login: ' + username + '\nSua senha: ' + password);
});
});

document.getElementById('togglePasswordLogin').addEventListener('click', function() {
    const passwordField = document.getElementById('passwordLogin');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});



//formulario de login//
const loginContForm = document.getElementById('loginContForm');

loginContForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameLogin = document.getElementById('usernameLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;

    if (listUser.includes(usernameLogin) && listPass.includes(passwordLogin)) {
        alert('Login bem-sucedido! Bem-vindo de volta, ' + usernameLogin + '!');

        setTimeout(() => {
            document.querySelector('.step-2').style.display = 'none';
            document.querySelector('.step-3').style.display = 'flex';
        }, 1000);
    } else {
        alert('Login falhou! Verifique seu login e senha e tente novamente.');
    }
});

//botão de reiniciar//
const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', function() {
    window.location.reload();
});






    