window.alert('Olá, seja bem-vindo!');
window.alert('Para acessar a próxima página, utileze Username: teste / Password: teste. Divirta-se');

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

async function logarmobi() {
    try {
        const response = await fetch("https://backend-535x.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: document.getElementById("usernamemobi").value,
                senha: document.getElementById("passwordmobi").value
            })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok && data.token) {
            localStorage.setItem("token", data.token);
            alert("Login realizado com sucesso");
            window.location.href = "page.html";
        } else {
            alert(data.error || "Erro no login");
        }
    } catch (error) {
        console.error(error);
        alert("Erro ao conectar com o servidor");
    }
}

async function logardesc() {
    try {
        const response = await fetch("http://192.168.100.3:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: document.getElementById("usernamedesc").value,
                senha: document.getElementById("passworddesc").value
            })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok && data.token) {
            localStorage.setItem("token", data.token);
            alert("Login realizado com sucesso");
            window.location.href = "page.html";
        } else {
            alert(data.error || "Erro no login");
        }
    } catch (error) {
        console.error(error);
        alert("Erro ao conectar com o servidor");
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