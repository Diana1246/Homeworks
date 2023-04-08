 function submitAll() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (password === "123456"){
        alert('Вітаємо' + username + '! Вхід авторизовано');
    }else{
        alert('Невірний пароль');
    }
 }