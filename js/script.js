window.alert('Olá, seja bem-vindo!');
window.alert('Para acessar a próxima página, clique em login ou Sign in.')

function clicknav() {
    var login = document.getElementById('login-mobile');
    if (login.style.display === 'none') {
        login.style.display = 'block';
    } else {
        login.style.display = 'none';
    }
}

function clicknav2() {
    var login = document.getElementById('login-desc');
    if (login.style.display === 'none') {
        login.style.display = 'block';
    } else {
        login.style.display = 'none';
    }
}

function mudouTamanho() {
    var loginmob = document.getElementById('login-mobile');
    var logindesc = document.getElementById('login-desc');
    if (window.innerWidth >= 992) {
        loginmob.style.display = 'none';
    } else {
        loginmob.style.display = 'block';
    }

    if (window.innerWidth < 992) {
        logindesc.style.display = 'none';
    } else {
        logindesc.style.display = 'block';
    }
}