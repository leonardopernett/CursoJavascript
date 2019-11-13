


const btnBoton = document.querySelector('#btnBotones');

const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');

(()=> {
    
    btnBoton.addEventListener('click', agregrabotones);
    botones.addEventListener('click', delegacion);

})();

(()=>{
   
    const color = localStorage.getItem('colorFondo');
    console.log(color)

    if(color === null){

        fondo.className ='bg-dark';
    }else {

        fondo.className = color;
    }

})()




function agregrabotones(e){

    e.preventDefault();

    botones.innerHTML = ` 
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary"> secondary</button>
    <button class="btn btn-danger"> danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>
    
    ` ;
}

function delegacion(e){
    e.preventDefault();

  const colorBoton = e.target.classList[1];

  switch(colorBoton){
        
       case('btn-primary'):
         console.log('diste click en primary');
         fondo.className ='bg-primary';
         localStorage.setItem('colorFondo','bg-primary');
       break;

       case('btn-secondary'):
         console.log('diste click en secondary');
         fondo.className ='bg-secondary';
         localStorage.setItem('colorFondo','bg-secondary');

       break;

       case('btn-danger'):
         console.log('diste click en danger');
         fondo.className ='bg-danger';
         localStorage.setItem('colorFondo','bg-danger');

       break;

       case('btn-success'):
         console.log('diste click en success');
         fondo.className ='bg-success';
         localStorage.setItem('colorFondo','bg-success');

       break;

       case('btn-warning'):
         console.log('diste click en  warning');
         fondo.className ='bg-warning';
         localStorage.setItem('colorFondo','bg-warning');

       break;
       
       default:

  }
}


//localstorage


// const nombre = 'leonardo';
// localStorage.setItem('nombreUsuario', nombre);
// const USerlocalStorage = localStorage.getItem('nombreUsuario');


// localStorage.removeItem('nombreUsuario');
// console.log(USerlocalStorage);