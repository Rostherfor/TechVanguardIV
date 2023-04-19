



const carruselCards = document.querySelector(".carrusel-local__cards");
let carruselCard = document.querySelectorAll(".carrusel-local__card");
let carruselCardLast = carruselCard[carruselCard.length - 1];

const btnRight = document.querySelector(".carrusel-local__btn-right");
const btnLeft = document.querySelector(".carrusel-local__btn-left");

carruselCards.insertAdjacentElement('afterbegin', carruselCardLast);



    
    
        
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
        });
    
    

        if(window.innerWidth > 768){

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
               
            });
        }
    
         
    

        



    


