


let modal = document.querySelector('.modal');
let modalX = document.querySelector('.modal__x');
let modalSign = document.querySelector('.modal__sign');
let sendB = document.querySelector('.modal__sendB');
let inputName = document.querySelector('#modal__input--name');
let inputMail = document.querySelector('#modal__input--mail');
let background = document.querySelector('.modal');


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

setTimeout(() => {
    
    modal.classList.add('modal__open');
   
}, 5000);



setTimeout(() => {
    
    
    modalSign.style.transform = 'translate(-50%, -40%)'
}, 5050);


modalX.addEventListener('click', ()=>{
    modal.classList.remove('modal__open');
});

background.addEventListener('click', ()=>{
    modal.classList.remove('modal__open');
});


sendB.addEventListener('click', (event)=>{
    
    event.preventDefault();
    if(inputName.value.trim() === '' || inputMail.value.trim() === ''){

        alert('Debes llenar todos los campos');
        
    }

    if (!isValidEmail(inputMail.value)) {
        alert('Por favor ingrese una dirección de correo electrónico válida');
        return;
      } else{
        
            modal.classList.remove('modal__open');
       
      }

});

 




const carruselCards = document.querySelector(".carrusel-local__cards");
let carruselCard = document.querySelectorAll(".carrusel-local__card");
let carruselCardLast = carruselCard[carruselCard.length - 1];

const btnRight = document.querySelector(".carrusel-local__btn-right");
const btnLeft = document.querySelector(".carrusel-local__btn-left");

carruselCards.insertAdjacentElement('afterbegin', carruselCardLast);
let funcionSliderBig;
let funcionSlider;

 if(window.innerWidth >= 769){
    funcionSliderBig = setInterval(sliderBig, 3000); }

 if(window.innerWidth <= 768){
     funcionSlider = setInterval(slider, 3000);
 }


function sliderBig(){


    
        
            
            let carruselCardFirst = document.querySelectorAll(".carrusel-local__card")[0];
            carruselCards.style.marginLeft = "-66%";
            carruselCards.style.transition = "all .5s ease";
            setTimeout(function () {
    
                carruselCards.style.transition = 'none';
                carruselCards.insertAdjacentElement('beforeend', carruselCardFirst);
                carruselCards.style.marginLeft = '-33%'
    
            }, 500)
        


}

function slider(){


    
        
            
    let carruselCardFirst = document.querySelectorAll(".carrusel-local__card")[0];
    carruselCards.style.marginLeft = "-200%";
    carruselCards.style.transition = "all .5s ease";
    setTimeout(function () {

        carruselCards.style.transition = 'none';
        carruselCards.insertAdjacentElement('beforeend', carruselCardFirst);
        carruselCards.style.marginLeft = '-100%'

    }, 500)



}

    



function next() {


    let carruselCardFirst = document.querySelectorAll(".carrusel-local__card")[0];
    carruselCards.style.marginLeft = "-200%";
    carruselCards.style.transition = "all .5s ease";
    setTimeout(function () {

        carruselCards.style.transition = 'none';
        carruselCards.insertAdjacentElement('beforeend', carruselCardFirst);
        carruselCards.style.marginLeft = '-100%'

    }, 500)
}


btnRight.addEventListener('click', () => {
    next()
    clearInterval(funcionSlider);
});


function preview() {


    
    let carruselCard = document.querySelectorAll(".carrusel-local__card");
    let carruselCardLast = carruselCard[carruselCard.length - 1];
    carruselCards.style.marginLeft = "0%";
    carruselCards.style.transition = "all .5s ease";
    setTimeout(function () {

        carruselCards.style.transition = 'none';
        carruselCards.insertAdjacentElement('afterbegin', carruselCardLast);
        carruselCards.style.marginLeft = '-100%'

    }, 500)
}

btnLeft.addEventListener('click', () => {
    preview()
    clearInterval(funcionSlider);
});



if (window.innerWidth > 768) {

    function nextBig() {


        
        let carruselCardFirst = document.querySelectorAll(".carrusel-local__card")[0];
        carruselCards.style.marginLeft = "-66%";
        carruselCards.style.transition = "all .5s ease";
        setTimeout(function () {

            carruselCards.style.transition = 'none';
            carruselCards.insertAdjacentElement('beforeend', carruselCardFirst);
            carruselCards.style.marginLeft = '-33%'

        }, 500)
    }


    btnRight.addEventListener('click', () => {
        nextBig();
        clearInterval(funcionSliderBig);
        

    });


    function previewBig() {


        
        let carruselCard = document.querySelectorAll(".carrusel-local__card");
        let carruselCardLast = carruselCard[carruselCard.length - 1];
        carruselCards.style.marginLeft = "0%";
        carruselCards.style.transition = "all .5s ease";
        setTimeout(function () {

            carruselCards.style.transition = 'none';
            carruselCards.insertAdjacentElement('afterbegin', carruselCardLast);
            carruselCards.style.marginLeft = '-33%'

        }, 500)
    }


    btnLeft.addEventListener('click', () => {
        previewBig();
        clearInterval(funcionSliderBig);
        
        

    });
}














