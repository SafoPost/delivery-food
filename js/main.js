// Показываем и скрываем модальное окно
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// Day 1
const btnAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');

const logInForm = document.getElementById('logInForm');
const logInInput = document.getElementById('login');

const userName = document.querySelector('.user-name');
const cartBtn = document.getElementById('cart-button');
const btnOut = document.querySelector('.button-out');


let login = localStorage.getItem('deliveryFood');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
  logInInput.style.border = '';
};


// Если пользователь авторизован
function authorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('deliveryFood');
    btnAuth.style.display = '';
    userName.style.display = '';
    cartBtn.style.display = '';
    btnOut.style.display = '';

    btnOut.removeEventListener('click', logOut);
    checkAuth();
  };

  console.log('Авторизован');

  userName.textContent = login;
  btnAuth.style.display = 'none';
  userName.style.display = 'inline';
  cartBtn.style.display = 'block';
  btnOut.style.display = 'block';

  btnOut.addEventListener('click', logOut);
};

// Если пользователь не авторизован
function notAuthorized() {
  console.log('Не авторизован')

  function logIn(event) {
    event.preventDefault();
    logInInput.style.border = '';

    if (logInInput.value.trim() === '') {
      logInInput.style.border = '1px solid red';
      return;
    }

    login = logInInput.value;

    localStorage.setItem('deliveryFood', login)

    toggleModalAuth();
    btnAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();

  };

  btnAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);

};

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
};
checkAuth();