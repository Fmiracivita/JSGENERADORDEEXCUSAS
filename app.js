let quien = ['El perro','Mi hija','El gato','Mi hamster'];
let que = ['Comió','Perdió','Aplastó','Rompió'];
let cosa = ['Mi Desayuno','Mi Tarea','Mi Almohada'];
let cuando = ['Antes de ir a la escuela','Cuando terminé de ir al baño','Durante mi almuerzo','Mientras estaba cortando el pasto'];

function random(arr){
    return randomNumber = Math.floor(Math.random() * arr.length);
}
let excuse = quien[random(quien)] +' '+que[random(que)]+' '+cosa[random(cosa)]+' '+cuando[random(cuando)]+'.';

console.log(excuse);