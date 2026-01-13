window.alert('Olá, seja bem-vindo!');
window.alert('Para acessar a próxima página, clique em login ou Sign in.')

function clicklogin() {
    var login = document.getElementById('login-mobile');
    var sign = document.getElementById('sign-mobile');
    sign.style.display = 'none';
    if (login.style.display === 'none') {
        login.style.display = 'block';
    } else {
        login.style.display = 'none';
    }
}

function clicklogin2() {
    var login = document.getElementById('login-desc');
    var sign = document.getElementById('sign-desc');
    sign.style.display = 'none';
    if (login.style.display === 'none') {
        login.style.display = 'block';
    } else {
        login.style.display = 'none';
    }
}

function clicksign() {
    var sign = document.getElementById('sign-mobile');
    var login = document.getElementById('login-mobile');
    login.style.display = 'none';
    if (sign.style.display === 'none') {
        sign.style.display = 'block';
    } else {
        sign.style.display = 'none';
    }
}

function clicksign2() {
    var sign = document.getElementById('sign-desc');
    var login = document.getElementById('login-desc');
    login.style.display = 'none';
    if (sign.style.display === 'none') {
        sign.style.display = 'block';
    } else {
        sign.style.display = 'none';
    }
}

function mudouTamanho() {
    var loginmob = document.getElementById('login-mobile');
    var logindesc = document.getElementById('login-desc');
    var login = document.getElementById('login-mobile');
    var sign = document.getElementById('sign-mobile');
    var signdesc = document.getElementById('sign-desc');
    var logindesc = document.getElementById('login-desc');
    if (window.innerWidth >= 992) {
        sign.style.display = 'none';
        login.style.display = 'none';
        loginmob.style.display = 'none';
    } else {
        loginmob.style.display = 'block';
    }

    if (window.innerWidth < 992) {
        signdesc.style.display = 'none';
        logindesc.style.display = 'none';
        logindesc.style.display = 'none';
    } else {
        logindesc.style.display = 'block';
    }
}