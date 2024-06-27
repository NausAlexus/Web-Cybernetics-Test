const formSite = document.querySelector(".login-form");
const contentSite = document.querySelector(".content");
const btnOpen = document.querySelector(".btn");
const btnClose = document.querySelector(".btn-close");

let emailForm = document.querySelector(".email");
let passwordForm = document.querySelector(".password");
let enterForm = document.querySelector(".form-enter");
let submitForm = document.querySelector(".form-reg");


// Логика кнопки открытия/закрытия формы
btnOpen.onclick = function (){
    formSite.style.opacity = "1";
    contentSite.style.display = "none";
}
btnClose.onclick = function (){
    formSite.style.opacity = "0";
    contentSite.style.display = "flex";
}

// Логика регистрации
let users = {};

function User(email, password) {
    this.email = email;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submitForm.addEventListener('click', () => {
    const emailUser = emailForm.value;
    const passwordUser = passwordForm.value;

    const user  = new User(emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${emailUser} - успешно зарегистрирована!`);
})


// Логика входа
enterForm.onclick = function (){
    alert(`${emailForm.value} Добро пожаловать!`);
}