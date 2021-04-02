let form = document.forms.myForm;
let myName = form.elements.myname;
let surname = form.elements.surname;
let email = form.elements.email;
let city = form.elements.city;
let password = form.elements.password;
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error1 = document.getElementById("error3");
let error1 = document.getElementById("error4");
let password_repeat = form.elements.password_repeat;
let check = form.elements.check;
let text = document.querySelector("#text");

email.onblur = function () {
  if (!email.value.includes("@")) {
    email.classList.add("invalid");
    error.innerHTML = "Пожалуйста, введите правильный email.";
  }
};

email.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
};
myName.onblur = function () {
  if (!myName.value) {
    myName.classList.add("invalid");
    error1.innerHTML = "Пожалуйста, введите имя";
  }
};

myName.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error1.innerHTML = "";
  }
};
password.onblur = function () {
  if (!password.value) {
    password.classList.add("invalid");
    error2.innerHTML = "Пожалуйста, введите пароль";
  }
};
password.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error2.innerHTML = "";
  }
};
password_repeat.onblur = function () {
  if (!password_repeat.value) {
    password_repeat.classList.add("invalid");
    error4.innerHTML = "Пожалуйста, введите пароль";
  }
};
password_repeat.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error4.innerHTML = "";
  }
};

check.onblur = function () {
  if (!check.checked) {
    check.classList.add("invalid");
    text.style.color = "red";
    error3.innerHTML = "Пожалуйста, введите пароль";
  }
};
check.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error3.innerHTML = "";
    text.style.color = "black";
  }
};
form.addEventListener("submit", (e) => {
  if (!email.value.includes("@")) {
    email.classList.add("invalid");
    error.innerHTML = "Пожалуйста, введите правильный email.";
  } 
  if (!myName.value) {
    myName.classList.add("invalid");
    error1.innerHTML = "Пожалуйста, введите имя";
  } 
  if (!password.value) {
    password.classList.add("invalid");
    error2.innerHTML = "Пожалуйста, введите пароль";
  } 
  if (!password_repeat.value) {
    password_repeat.classList.add("invalid");
    error4.innerHTML = "Пожалуйста, введите пароль";
  }
  if (!check.checked) {
    check.classList.add("invalid");
    text.style.color = "red";
    error3.innerHTML = "Пожалуйста, cогласитесь";
  } 

  let info = {};
  info.city = city.value;
  info.email = email.value;
  info.myName = myName.value;
  info.password = password.value;
  info.surname = surname.value;
  if ( email.value.includes("@") && myName.value && password.value && check.checked) {
    console.log(info);
  } 
  e.preventDefault();
});

let button1 = document.getElementById("button1");
button1.onclick = function () {
  check.classList.remove("invalid");
  error3.innerHTML = "";
  text.style.color = "black";
  email.classList.remove("invalid");
  error.innerHTML = "";
  myName.classList.remove("invalid");
  error1.innerHTML = "";
  password.classList.remove("invalid");
  error2.innerHTML = "";
  password_repeat.classList.remove("invalid");
  error4.innerHTML = "";
};
