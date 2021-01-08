// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');   /* ou poderia usar getElementsByTagName */
console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);      /* fç q mostra só o texto */
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;    /* ñ tem argumento usar parenteses */
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);  /* dando looping */

console.log(i);