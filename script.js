function login() {
    let password = document.getElementById('password').value;

    if (password == 'drowssap') {
        window.location.href = './success.html';
    } else {
        alert('Wrong! Just guess! (ツ) ');
    }

}    