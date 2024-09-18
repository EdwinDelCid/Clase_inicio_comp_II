let contador = 0;
contador = contador + 1;
contador = contador + 1;

console.log(contador);

const contar =1;
console.log(contar);

if(true){
  const contador =5;
  console.log(contador);
}


const persona ={nombre : "Edwin", apellido: "Del Cid"}
console.log(persona.nombre);


const frutas = ["pera", "manzana", "sandia"];
console.log(frutas[1]);

const animal ={
  color: "naranja",
  nombre: "simba",
  rugiendo: true
}

console.log("Este leon es de colo " + animal.color);
console.log("Y su nombre es "+ animal.nombre);

console.log(animal["rugiendo"]);


const tareas = {
  "2359-91jdnfjnsid" : {
    title: "tarea #01"
  }
}

console.log(tareas["2359-91jdnfjnsid"].title);


const animal = {
  color : "Naranja",
  nombre : "Simba",
  rugiendo : true,
  favoritos : {
    dia : {
      Ok: true,
    },
    noche:{
      ok: false
    }
  }
}

console.log(animal.favoritos.dia.Ok);
console.log("color" + color + ", animal : "+ nombre);
//undefined
const animal = {
  color : "Naranja",
  nombre : "Simba",
  rugiendo : true,
  favoritos : {
    dia : {
      Ok: true,
    },
    noche:{
      ok: false
    }
  }
}

console.log(animal.favoritos.luna?.Ok);

//destructuring

const animal = {
  color : "azul",
  nombre : "Torogoz",
  volando : true
}
  const {color, nombre, volando} = animal;

  console.log("El"  + nombre + " es de color : " + color );

  //array indexado

  const frutas = [ "pera", "manzanas", "sandia"];

  //destructuring

  const [pera, manzana, sandia] = frutas;
  console.log("A mi me gusta la " + pera);

//interpolacion y operador ternario