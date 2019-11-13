
class Pelicula {

    constructor(nombre, id){
        this.nombre=nombre;
        this.id= id ;  
    }


   function reproducir(){

        return 'reproduciendo peliculas ' + this.nombre;
    }
}


class Serie extends Pelicula {

  constructor(nombre , id , cap){

      super(nombre, id);
      this.cap = cap;
  }

    reproducirCapitulo(){
        return "reproduciendo " + this.cap + " capitulo de "+ this.nombre;
    }
} 

const pelicula1 = new Pelicula('harry',1);
const pelicula2 = new Pelicula('andres',2);
const serie1 = new Serie('dexter',3, 55);


console.log(pelicula1.reproducir());
console.log(pelicula2.reproducir());

console.log(serie1.reproducirCapitulo());