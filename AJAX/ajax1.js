console.log('iniciando !!!!')



var boton = document.querySelector('#boton').addEventListener('click', traerDatos);


function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'text.txt', true);
    xhttp.send();
           
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            const texto = document.getElementById('texto');
            texto.innerHTML= this.responseText;
            }
       }
}