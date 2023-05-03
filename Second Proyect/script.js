// ========================DECLARACION DE CONSTANTES===========================
const CARRITO = document.getElementById('cart-content__table');
const ELEMENTOS1 = document.getElementById('list-1');
const ELEMENTOS2 = document.getElementById('list-2');
const LISTA = document.querySelector('#cart-list tbody');
const TABLA_CARRITO = document.getElementById('cart-list');
const TABLA_BACKGROUND = document.getElementById('cart-background');
const VACIAR_CARRITO_BTN = document.getElementById('empty-cart');
const SECTION_CART = document.getElementById('section-cart');
const SECTION_HOME = document.getElementById('section-home');
const SECTION_PAGE_1 = document.getElementById('main-content__page1');
const SECTION_PAGE_2 = document.getElementById('main-content__page2');
const CONTADOR_PRODUCTOS = document.getElementById('shoping-cart__span');
const CONTADOR_PRODUCTOS_TOTAL = document.getElementById('pay-products');
const PRECIO_SUBTOTAL = document.getElementById('pay-products__subtotal');
const DECLARACION_ENVIO = document.getElementById('pay-products__envio');
const PRECIO_TOTAL = document.getElementById('pay-products__total');
const PAGAR_VACIO = document.getElementById('pay-content__empty');
const PAGAR_LLENO = document.getElementById('pay-content__total');
const PRUEBA_CARRITO = document.getElementById('shooping-bag__container-logo-cart');

//  MOBILE SECCION!
const SECTION_CART_MOBILE = document.getElementById('section-cart__mobile');
const SECTION_HOME_MOBILE = document.getElementById('section-home__mobile');
const CONTADOR_PRODUCTOS_MOBILE = document.getElementById('shoping-cart__span__mobile');
//============================================================================

//======================DECLARACION DE VARIABLES==============================
let contador = 0;
let sumaPrecios = 0;
//============================================================================

// =====================DECLARACION DE FUNCIONES==============================
function cargarEventListener() {
    ELEMENTOS1.addEventListener('click', comprarElemento);
    ELEMENTOS2.addEventListener('click', comprarElemento);
    CARRITO.addEventListener('click', eliminarElemento);
    VACIAR_CARRITO_BTN.addEventListener('click', vaciarCarrito);
    SECTION_CART.addEventListener('click', mostrarCarrito);
    SECTION_CART_MOBILE.addEventListener('click', mostrarCarritoMobile);
    SECTION_HOME.addEventListener('click', mostrarHome);
    SECTION_HOME_MOBILE.addEventListener('click', mostrarHomeMobile);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        contador++;
        alert('SE AGREGO UN PRODUCTO A SU CARRITO! ✔');

        CONTADOR_PRODUCTOS.innerHTML = contador;
        CONTADOR_PRODUCTOS_MOBILE.innerHTML = contador;
        CONTADOR_PRODUCTOS_TOTAL.innerHTML = contador;
        DECLARACION_ENVIO.innerHTML = 'FREE'
        TABLA_CARRITO.style.display = 'table';
        TABLA_BACKGROUND.style.display = 'none'
        PAGAR_VACIO.style.display = 'none';
        PAGAR_LLENO.style.display = 'block';
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
    
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.price').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            USD$<span class="precio-productos-carrito">${elemento.precio}</span>.00
        </td>
        <td>
            <a href="#" class="borrar" data-precio="${elemento.precio}"><span class="material-symbols-outlined" data-id="${elemento.id}">delete</span></a>
        </td>
    `;

    LISTA.appendChild(row);

    sumarPrecios(elemento.precio);
}

function sumarPrecios(precio) {
    sumaPrecios += parseFloat(precio); 

    PRECIO_SUBTOTAL.innerHTML = `$${sumaPrecios}.00`;
    PRECIO_TOTAL.innerHTML = `$${sumaPrecios}.00`;
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains('material-symbols-outlined')) {
        
        e.target.parentElement.parentElement.parentElement.remove();
        alert('SE ELIMINO UN PRODUCTO! ✔');
        elemento = e.target.parentElement.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
        contador--;
        restarPrecios(parseFloat(elemento.querySelector('a').getAttribute('data-precio')));
    }

    if(contador === 0){
        TABLA_CARRITO.style.display = 'none';
        TABLA_BACKGROUND.style.display = 'flex';
        PAGAR_VACIO.style.display = 'block';
        PAGAR_LLENO.style.display = 'none';
    }
    CONTADOR_PRODUCTOS.innerHTML = contador;
    CONTADOR_PRODUCTOS_MOBILE.innerHTML = contador;
    CONTADOR_PRODUCTOS_TOTAL.innerHTML = contador;
}

function restarPrecios(precio) {
    sumaPrecios -= precio; 

    PRECIO_SUBTOTAL.innerHTML = `$${sumaPrecios}.00`;
    PRECIO_TOTAL.innerHTML = `$${sumaPrecios}.00`;
}


function vaciarCarrito() {
    while(LISTA.firstChild) {
        LISTA.removeChild(LISTA.firstChild);
    }
    return false;
}

function mostrarCarrito(){
    SECTION_CART.style.display = 'none';
    SECTION_HOME.style.display = 'block';
    SECTION_PAGE_1.style.display = 'none'
    SECTION_PAGE_2.style.display = 'block'
}



function mostrarHome(){
    SECTION_HOME.style.display = 'none';
    SECTION_CART.style.display = 'block';
    SECTION_PAGE_2.style.display = 'none'
    SECTION_PAGE_1.style.display = 'block'
}

//  FUNCIONES DE VERSION MOBILE
function mostrarCarritoMobile(){
    SECTION_PAGE_1.style.display = 'none'
    SECTION_PAGE_2.style.display = 'block'
}

function mostrarHomeMobile(){
    SECTION_PAGE_2.style.display = 'none'
    SECTION_PAGE_1.style.display = 'block'
}
//==============================================================================

//=======================EJECUCION DEL CODIGO===================================
SECTION_HOME.style.display = 'none';
SECTION_PAGE_2.style.display = 'none';
VACIAR_CARRITO_BTN.style.display = 'none';
TABLA_CARRITO.style.display = 'none';
PAGAR_LLENO.style.display = 'none';
PRECIO_SUBTOTAL.innerHTML = `$${sumaPrecios}.00`; 
cargarEventListener();