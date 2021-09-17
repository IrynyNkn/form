const form = document.getElementById('form')
const login = document.getElementById('login')
const password = document.getElementById('password')
const error = document.querySelector('.error');
const loader = document.querySelector('.loader');
const modal = document.querySelector('.modal')
const modalDagger = document.getElementById('closeModal')
const errorDagger = document.getElementById('errorDagger')

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs()
})

modalDagger.addEventListener('click', e=>{
    modal.classList.remove('modal--visible');
    login.value = '';
    password.value = '';
})

errorDagger.addEventListener('click', e=>{
    error.classList.add('error--hidden');
})

const showErrorMessage = () => {
    error.classList.remove('error--hidden');
}

const showModal = () => {
    loader.classList.toggle('loader--hidden');
    modal.classList.add('modal--visible');
}

const showSuccessMessage = () => {
    loader.classList.toggle('loader--hidden');
    setTimeout(()=>{
        showModal()
    }, 2000)
}

function checkInputs(){
    const loginValue = login.value.trim();
    const passwordValue = password.value.trim();

    if(loginValue==='' || passwordValue===''){
        showErrorMessage();
    }else{
        showSuccessMessage();
    }
}
