console.log('funcionando');

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
   e.preventDefault();


   var datos = new FormData(formulario);

   console.log(datos.get('usuario'));

   fetch('buscar.php')
   .then(res => res.json())
   .then((data) => {
       console.log(data)
   })

})