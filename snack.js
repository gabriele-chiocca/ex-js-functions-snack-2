//Snack 1

// 1)
// function sommaNumeri(numero1, numero2) {
//   console.log(numero1 + numero2);
// }

// sommaNumeri(1, 2);

// 2)

// const sommadeiNum = function (num1, num2) {
//   console.log(num1 + num2);
// };

// sommadeiNum(1, 2);

// 3)
// const sommaNum = (numero1, numero2) => console.log(numero1 + numero2);

// sommaNum(1, 2);

//Snack 2

// const quadrato = (num) => console.log(num * 2);

// quadrato(2);

//Snack 3

// const somma = (a, b) => a + b;

// const moltiplicazione = (a, b) => a * b;
// const eseguiOperazione = (a, b, operazione) => operazione(a, b);

// console.log(eseguiOperazione(2, 4, somma));
// console.log(eseguiOperazione(2, 4, moltiplicazione));

// Snack 4

// function creaTimer(tempo) {
//   return function () {
//     setTimeout(() => {
//       console.log('Tempo scaduto!');
//     }, tempo);
//   };
// }

// const timer = creaTimer(1000);

// timer();

//Snack 5

// function stampaOgniSecondo(messaggio) {
//   setInterval(() => {
//     console.log(messaggio);
//   }, 1000);
// }

// stampaOgniSecondo('Ciao a tutti');

//Snack 6

// function creaContatoreAutomatico(tempo) {
//   return function () {
//     let contatore = 0;
//     setInterval(() => {
//       contatore++;
//       console.log('Incremento', contatore);
//     }, tempo);
//   };
// }

// const timerIncremento = creaContatoreAutomatico(1000);

// timerIncremento();

// Snack 7

function eseguiEFerma(messaggio, avvio, stop) {
  const id = setInterval(() => {
    console.log(messaggio);
  }, avvio);

  setTimeout(() => {
    clearInterval(id);
  }, stop);
}

eseguiEFerma('Eccomi qui', 1000, 6000);
