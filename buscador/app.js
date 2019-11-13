const productos = [

    {nombre:'platano', valor:500},
    {nombre:'manzana', valor:1500},
    {nombre:'uva', valor:2500},
    {nombre:'pera', valor:3500},
    
];



const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');




const filtrar = () => {
    resultado.innerHTML ='';
    //console.log(formulario.value);
    const texto = formulario.value.toLowerCase();

    for(let product of productos){
        let nombre = product.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){

            resultado.innerHTML += ` <li> ${product.nombre} </li> ` ;
        }
    }

    if( resultado.innerHTML ===''){
         
        resultado.innerHTML += ` <li> producto no encontrado </li> ` ;
    }
}

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

filtrar();