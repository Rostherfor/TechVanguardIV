(function(){

    let button = document.querySelector(".offscreen");
    let body = document.querySelector("body");
    let caja1 = document.querySelector(".box-1");
    let caja2 = document.querySelector(".box-2");
    let caja3 = document.querySelector(".box-3");
    let caja4 = document.querySelector(".box-4");
    let caja5 = document.querySelector(".box-5");


    let h21 = document.querySelector(".h2-1");
    let h22 = document.querySelector(".h2-2");
    let h23 = document.querySelector(".h2-3");
    let h24 = document.querySelector(".h2-4");
    let h25 = document.querySelector(".h2-5");

    let span1 = document.querySelector(".span-1");
    let span2 = document.querySelector(".span-2");
    let span3 = document.querySelector(".span-3");
    let span4 = document.querySelector(".span-4");
    let span5 = document.querySelector(".span-5");


    button.addEventListener('change', () => {

        body.classList.toggle('dark');
        caja1.classList.toggle('dark');
        caja2.classList.toggle('dark');
        caja3.classList.toggle('dark');
        caja4.classList.toggle('dark');
        caja5.classList.toggle('dark');
        h21.classList.toggle('dark');
        h22.classList.toggle('dark');
        h23.classList.toggle('dark');
        h24.classList.toggle('dark');
        h25.classList.toggle('dark');
        span1.classList.toggle('dark');
        span2.classList.toggle('dark');
        span3.classList.toggle('dark');
        span4.classList.toggle('dark');
        span5.classList.toggle('dark');


    });
})()