//header menu-burger script
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mobileMenu").addEventListener('click', () => {
        document.querySelector(".navWrapper").classList.toggle('active');
        document.querySelector(".headerBurger").classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });
});
//header menu-burger script

//modal window reg script 
const openModalWindow = document.getElementById('openModal_Registration');
const closeModalWindow = document.getElementById('crossForClose');
const modalWindow = document.getElementById('modalWindowRegistrationWrapper');

openModalWindow.addEventListener('click', function(e){
    e.preventDefault();
    modalWindow.classList.add('active');
})

closeModalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
})

// const openModalRegistration = document.querySelector("#openModal_Registration");
// const ModalWindows = document.getElementById('modalWindowRegistrationWrapper');

// openModalRegistration.addEventListener('click', () => {
//     const wrapper = document.querySelector('.modalWindowRegistrationWrapper');
//     ModalWindows.classList.add('active');
//     wrapper.style.display = 'flex';

//     const modalMask = document.querySelector(".modalMask");
//     modalMask.style.display = 'initial';

//     wrapper.appendChild(modalMask);

//     const modalContainerRegistration = document.querySelector('.modalWindowRegistration');
//     modalContainerRegistration.style.display = 'initial';

//     const cross = document.querySelector('.crossForClose');
//     cross.addEventListener('click', () => {
//         closeModalReg();

//     });

//     modalContainerRegistration.appendChild(cross);

//     const modalWindowRegContent = document.querySelector('.modalWindowRegContent');
//     modalWindowRegContent.style.display = 'flex';

//     modalContainerRegistration.appendChild(modalWindowRegContent);

//     wrapper.appendChild(modalContainerRegistration);

//     document.body.appendChild(wrapper);
// });

// function closeModalReg() {
//     const modal = document.querySelector('.modalWindowRegistrationWrapper');

//     if(!modal) {
//         return;
//     }

//     modal.style.display = 'none';
// }