const productos = [

    {nombre:'platano', valor:500},
    {nombre:'manzana', valor:1500},
    {nombre:'uva', valor:2500},
    {nombre:'pera', valor:3500},
    
];

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar =  () => {

    //   console.log(formulario.value);
    //   formulario.value ="";
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();

    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();

        if(nombre.indexOf(texto) !== -1){

            resultado.innerHTML += `<li>${producto.nombre}</li>`;
        }

     
    }

     if( resultado.innerHTML ==''){

        resultado.innerHTML += `<li>producto no encontrado</li>`;
     }


}



boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);


filtrar();

