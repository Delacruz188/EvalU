interface IExercise {
  title: string;
  id: string;
  description: string;
  difficulty: string;
  language: string;
  teacher: string;
  points: number;
}

export const EXERCISES: IExercise[] = [
  {
    title: "Hola Mundo",
    id: "a1f4c2",
    description: "Escribe un programa que muestre 'Hola Mundo' en la consola.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Mi Primer Mensaje",
    id: "b2e8d5",
    description:
      "Cambia el mensaje del programa anterior para que muestre tu nombre.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Dibujando en la Consola",
    id: "c3d7e4",
    description:
      "Escribe un mensaje que describa un dibujo que te gustaría hacer en la consola.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Mi Computadora",
    id: "d4c6b3",
    description:
      "Escribe un programa que describa cómo crees que funciona una computadora.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Introducción a los Comentarios",
    id: "e5a9f2",
    description:
      "Agrega comentarios en el código para explicar lo que hace cada línea.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Hola desde JavaScript",
    id: "f6b8c1",
    description: "Muestra un mensaje en la consola usando `console.log`.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Comentarios Importantes",
    id: "a7c3d8",
    description:
      "Agrega comentarios para describir lo que hace cada línea de tu código.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Escribiendo Tu Nombre",
    id: "b8d2e7",
    description: "Escribe tu nombre en la consola utilizando JavaScript.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Explorando la Consola",
    id: "c9e1f6",
    description:
      "Prueba diferentes mensajes en la consola y observa lo que sucede.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Guardando Información",
    id: "d1f2a5",
    description:
      "Guarda un mensaje en una variable y luego muéstralo en la consola.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Declarando Variables",
    id: "e2c3b4",
    description:
      "Crea una variable que guarde tu nombre y otra que guarde tu edad.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Tipos de Datos",
    id: "f3d4c7",
    description:
      "Crea variables para un número, una cadena de texto y un valor booleano.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Calculando Edad",
    id: "a4e5d6",
    description:
      "Crea un programa que calcule cuántos años tendrás en 10 años usando una variable.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Describiendo Tu Mascota",
    id: "b5f6e9",
    description:
      "Crea variables que describan a tu mascota: nombre, especie y edad.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Conversión de Unidades",
    id: "c6a7b8",
    description:
      "Crea un programa que convierta kilómetros a metros usando variables.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Suma de Números",
    id: "d7c8e1",
    description:
      "Crea un programa que sume dos números y muestre el resultado en la consola.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Resta de Números",
    id: "e8d9f4",
    description:
      "Crea un programa que reste dos números y muestre el resultado.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Multiplicación Sencilla",
    id: "f9e1a3",
    description:
      "Crea un programa que multiplique dos números y muestre el resultado.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "División Básica",
    id: "a1b2c3",
    description:
      "Crea un programa que divida un número por otro y muestre el resultado.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Calculadora Básica",
    id: "b2c3d4",
    description:
      "Crea un programa que realice una operación matemática básica (suma, resta, multiplicación, división) según la elección del usuario.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Crear una Función",
    id: "c3d4e5",
    description:
      "Escribe una función que sume dos números y devuelva el resultado.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Función con Parámetros",
    id: "d4e5f6",
    description:
      "Crea una función que reciba dos números como parámetros y los reste.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Función Multiplicadora",
    id: "e5f6a7",
    description:
      "Crea una función que multiplique dos números y muestre el resultado.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Función de Bienvenida",
    id: "f6a7b8",
    description:
      "Crea una función que reciba tu nombre y muestre un mensaje de bienvenida.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 5,
  },
  {
    title: "Función con Retorno",
    id: "a7b8c9",
    description:
      "Escribe una función que divida dos números y retorne el resultado.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Verificar Mayoría de Edad",
    id: "b8c9d1",
    description:
      "Crea un programa que verifique si una persona es mayor de 18 años.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Adivinar un Número",
    id: "c9d1e2",
    description:
      "Crea un programa que adivine si un número es mayor o menor que 10.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Par o Impar",
    id: "d1e2f3",
    description: "Crea un programa que verifique si un número es par o impar.",
    difficulty: "Fácil",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 10,
  },
  {
    title: "Número Aleatorio",
    id: "e2f3a4",
    description:
      "Genera un número aleatorio entre 1 y 100 y muéstralo en la consola.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Juego de Adivinanza",
    id: "f3a4b5",
    description:
      "Crea un juego donde el usuario intente adivinar un número entre 1 y 10.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Estructura Condicional",
    id: "a4b5c6",
    description:
      "Crea un programa que muestre diferentes mensajes según la edad del usuario.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Ciclo con For",
    id: "b5c6d7",
    description:
      "Escribe un ciclo que cuente del 1 al 10 y muestre cada número en la consola.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Ciclo con While",
    id: "c6d7e8",
    description:
      "Crea un ciclo que siga ejecutándose hasta que el usuario adivine un número.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Sumando con un Ciclo",
    id: "d7e8f9",
    description:
      "Usa un ciclo para sumar los números del 1 al 10 y muestra el resultado.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Ciclo y Condición",
    id: "e8f9a1",
    description:
      "Crea un ciclo que cuente del 1 al 10 y muestre solo los números pares.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Contando al Revés",
    id: "f9a1b2",
    description:
      "Crea un ciclo que cuente del 10 al 1 y muestre cada número en la consola.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 15,
  },
  {
    title: "Array de Nombres",
    id: "a1b2c3",
    description:
      "Crea un array con nombres de tus amigos y muestra cada uno en la consola.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Lista de Números",
    id: "b2c3d4",
    description:
      "Crea un array con números del 1 al 5 y muestra cada número multiplicado por 2.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Array y Ciclo",
    id: "c3d4e5",
    description: "Usa un ciclo para sumar todos los números en un array.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 25,
  },
  {
    title: "Array de Colores",
    id: "d4e5f6",
    description:
      "Crea un array con colores y muestra un mensaje para cada color.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Array de Objetos",
    id: "e5f6a7",
    description:
      "Crea un array de objetos que describan a tus amigos (nombre y edad).",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 25,
  },
  {
    title: "Accediendo a Propiedades",
    id: "f6a7b8",
    description:
      "Crea un objeto que describa tu casa y muestra sus propiedades en la consola.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Objeto de Estudiante",
    id: "a7b8c9",
    description: "Crea un objeto que contenga tu nombre, edad y grado escolar.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 20,
  },
  {
    title: "Añadiendo Métodos",
    id: "b8c9d1",
    description:
      "Crea un objeto con un método que muestre un saludo en la consola.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 25,
  },
  {
    title: "Actualizar Propiedades",
    id: "c9d1e2",
    description:
      "Crea un objeto y actualiza una de sus propiedades usando JavaScript.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 25,
  },
  {
    title: "Eliminar Propiedades",
    id: "d1e2f3",
    description:
      "Crea un objeto y elimina una de sus propiedades usando JavaScript.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 25,
  },
  {
    title: "Interacción con el DOM",
    id: "e2f3a4",
    description:
      "Crea un botón en una página web y cambia su color al hacer clic.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 30,
  },
  {
    title: "Cambiar Texto",
    id: "f3a4b5",
    description:
      "Escribe un programa que cambie el texto de un párrafo al hacer clic en un botón.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 30,
  },
  {
    title: "Ocultar Elemento",
    id: "a4b5c6",
    description:
      "Crea un programa que oculte un elemento en la página al hacer clic en un botón.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 30,
  },
  {
    title: "Mostrar Elemento",
    id: "b5c6d7",
    description:
      "Crea un programa que muestre un elemento oculto en la página al hacer clic en un botón.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 30,
  },
  {
    title: "Crear un Nuevo Elemento",
    id: "c6d7e8",
    description:
      "Crea un nuevo párrafo y agrégalo a la página web usando JavaScript.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 35,
  },
  {
    title: "Cambiar Imagen al Hacer Clic",
    id: "d7e8f9",
    description:
      "Crea un programa que cambie la imagen mostrada en una página web cuando se hace clic en un botón.",
    difficulty: "Intermedio",
    language: "JavaScript",
    teacher: "Mr. Code",
    points: 35,
  },
];
