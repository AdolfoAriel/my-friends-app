
export default function Ejercicios1(){
// ejercicio 1 / 

   function tabla(num) {
      let result = '';

      for (let i = 0; i <= 10; i++) {
         let operation = i * num;
         result += ` ${num} x ${i} = ${operation}|`;
      }
      return result;
   }


console.log(tabla(12));

// ejercicio 2  console.log(tabla(7));
// */

// const polindromo =(word)=>{
//    const invertid = word.split('').reverse().join('');
//    const checkOut = invertid === word
//    return checkOut
// }
//  console.log(polindromo('ojo'))

// ejercicio 3

//const findWord =(texto, word)=>{
 //  let text = texto.split(' ')
   //let count = 0
   //for(let i = 0; i < text.length;i++){
    //  if(text[i] === word ){count++}
  // }  return count}
//const frase = 'la sal no hace nada mal, al no ser parte del cuerpo, no hay incoveniente en usarlo';
//const palabra= 'no';
//console.log(findWord(frase, palabra))


//ejercicio 4

//const invertWord = (word)=>{
  // const invertid= word.split('').reverse().join('')
   //return invertid}
//console.log(invertWord('hola hijo de toda tu puta madre'))

//ejercicio 5 el porcentaje de un numero

 // const porcenta = (porcent,number) =>{
 //  const operation = (number*(porcent/100))
 //  return operation}
  //console.log(porcenta(15,100));

//ejercicio 6

 // const drawACuadrar = (number)=>{
   //let cuadrado = '';
   //for (let i=0; i < number; i++){
    //  for (let j = 0 ; j< number; j++){
    //     if (i===0||i === number -1 ||j ===0 || j=== number -1){
     //       cuadrado += '* ';
       //  }else { cuadrado +='  ';}
     // }cuadrado += '\n'} return cuadrado }
 //console.log(drawACuadrar(50))


 //ejercicio 7
//const beteen = (num1, num2 )=>{
  // let result = [];
//for(let i = num1 ; i <= num2 ;i++ ){
  //    if(i % 2 !==0 ){
    //     result.push(i)
     // }
  // }
   //const final = result.length
   //return final}
//console.log(beteen(1,40))


//ejercicio 8 

// const invertNumber = ( num)=>{
//    if(num >10 && num <= 0){
//       return num
//    }else{
//       const invert= parseInt(num.toString().split('').reverse().join(''))* Math.sign(num)
//       return invert
//    }
// }
// console.log(invertNumber(69));

// ejercicio 9
//  const commun = (a1,a2)=>{
//    const join = a1.filter(element => a2.includes(element))
//    return join 
//  }
//  console.log(commun([1,2,3],[1]));}




//ejercicio 10 
// const drawStairs = (level)=>{
//    let result = ''
//    for( let i =1; i <= level ; i++){
//       result += ''.repeat()+ '[-]'.repeat(i) + '\n'
//    }
//    return result
// }
// console.log(drawStairs(10));


//ejercicio 11

// const censoredWord = (text = false, wordTocensores= false)=>{
// let result =''
// if(!text && !wordTocensores){
//    return 'there nothing in the parameters'
// }
// if(!text || !wordTocensores){
//    return 'you missing a parameter'
// }
// const regex = new RegExp(wordTocensores);
// result = text.replace(regex, '[-CENSURADO-]')
// return result
// }
// console.log(censoredWord('hola adolfo', 'adolfo'));



//ejercicio 12

// const decrece = (num)=>{
//    let result = `\n`;
//    while (num >0){
//       result += `-n ${num} \n`;
//       num -= 8;
//    }
//    return result
// }
// console.log(decrece(10));

//ejercicio 13

// const divideArra = (array, size) =>{
//    let result = []
//    for(let i = 0 ;i <array.length; i += size ){
//       const chunk = array.slice(i, i +size );
//       result.push(chunk)
//    }
//    return result
// }
// const perro = [2,2,4,2]
// console.log(divideArra(perro,2));


// ejercicio 14

// const repeat = (word,num) =>{
//   let result = '';

//   for (let i = 0; i < num ; i ++){
//     result += word + ' '
//   }
//   return result
// }
// console.log(repeat('ariel', 3));

//exercise 15

// const letraQueMasSeRepite = (palabra)=>{
//   let recuentoDeLetras = new Map();
//   for (let i = 0; i < palabra.length ; i++){
//     let letra = palabra[i];
//     if(recuentoDeLetras[letra]){
//       recuentoDeLetras[letra]++
//     } else {
//       recuentoDeLetras[letra]=1;
//     }
//   }
// let letraRepetida;
// let mayorRecuento = 0;

// for(let letra in recuentoDeLetras) {
//   if (recuentoDeLetras[letra] > mayorRecuento){
//     mayorRecuento = recuentoDeLetras[letra];
//     letraRepetida = letra;
//   }
// }
// return `la letra que mas se repite es ${letraRepetida} de la palabra ${palabra}`
// }

// console.log(letraQueMasSeRepite('Esternocleidomastoideo'));


//exercise 16

// const searchVocals = (textToEvaluate)=>{
//   const aeiou = /[a,e,i,o,u]/gi;
//   const result = textToEvaluate.match(aeiou) 

//   return result ? result.length :0

// }
// console.log(searchVocals('welcome mi nombre es adolfo ariel '));


// exercise 17 


// const chainTo = (num)=>{
//   let final = '';
//   for(let i = 1 ; i <= num ; i++ ){
//     final += evaluate(i) + '  '
//   }

//   return final
// }

// const evaluate = (evaluateNumber)=>{
//   if(evaluateNumber %3 === 0 && evaluateNumber&5 === 0){
//     return 'DenoLemon';
//   } else if (evaluateNumber %3 === 0){
//     return 'Demo'
//   } else if (evaluateNumber % 5 === 0){
//     return 'Lemon'
//   }
//   return evaluateNumber
// }
// console.log(chainTo(12))


//exercise 18

// const divid = (num)=>{
//   let final = '';
//   for( let i= 0; i <= num ; i++ ) {
//     if(isDividid(i, num)){
//       final += i + ' ' }
//   }
//   return final
// }
//   const isDividid = ( num1, num2) => {
//     return  num2 % num1 === 0 ;
//   }

// console.log(divid(12));

// exercise 19


// const moviesMock = [
//   {title: "El señor de los anillos",
//   directedBy: "Deno Lemon",
//   seen: true},
//   {title: "El señor de los anillos 2",
//   directedBy: "Deno Lemon",
//   seen: true},
//   {title: "El señor de los anillos 3",
//   directedBy: "Deno Lemon",
//   seen: false},
//   {title: "High School Musical",
//   directedBy: "Deno Lemon",
//   seen: false},
// ]

// const myMovies = (movies)=>{
//   let final = '';
//   for(let movie of movies){
//     const {seen, title, directedBy} = movie;
//     if(seen){
//       final += `I have seen ${title} for ${directedBy}\n`
//     }else{
//       final += `I have not seen ${title} for ${directedBy}\n`
//     }
//   }
//   return final
// }
//   console.log(myMovies(moviesMock));

// exercise 20

// const text = (word)=>{
// return  word
// .replace(/[^\w]/gi,"")
// .toLowerCase()
// .split('')
// .sort()
// .join('')
// }

// const isAnAnagram = (word1, word2)=>{
//   return text(word1)=== text(word2)
// }
// console.log(isAnAnagram('mary', 'yamr'));

// exercise  21

// const textTo = (textToCut, numberToCut)=>{
//   if(validateParameters(textToCut, numberToCut)){
//     if(textToCut.length > numberToCut){
//       return textToCut.substring(0, numberToCut)
//     }else {
//       return numberToCut
//     } }else {
//        return ' nothing to find'
//     }
//   }


// const validateParameters = (value1, value2)=>{
//   return typeof value1 === 'string' && typeof value2 === 'number'
// }

// console.log(textTo('gato', 1));


// exercise 22
//   const  howIsTheBiggest = (num1, num2)=>{
//     if(num1 > num2 ){
//       return `El numero ${num1} es mayor que ${num2}`
//     } else {
//       return `El numero ${num2} es mayor que ${num1}`
//     }
//   }
// console.log(howIsTheBiggest(33,56));

//exercise 23
// const uper = ( text)=>{
// let palabras = text.split(' ');
// for(let i =0;i< palabras.length; i++){
//   let palabra = palabras[i]
// palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1)

// }
// return palabras.join(' ')
// }

// console.log(uper('hola mi nombre es adolfo '));

//execise 24

// const isAPermutation = (param1, param2)=>{
//   for (let i = 0; i < param2 ; i++){
//     if (param1.indexOf(i + 1) < 0){
//       return false
//     }
//   }
//   return true
// }
// console.log(isAPermutation([1,2,3,4,5], 6));


//exercise 25

// const upperOrDown = (text) =>{
//   let letterUpper = 0;
//   let letterDown = 0;
//   for( let letter of text){
//     if(letter === text.toUpperCase()){
//       letterUpper++;
//     } else {
//       letterDown++;
//     }
//   }
//   return letterUpper > letterDown ? text.toUpperCase() : text.toLowerCase();
// }
// console.log(upperOrDown('Adolfo'));


//exercise 26 
 
// const fabionacci = (number)=>{
//   let serie = [0,1];
//   for( let i = 2 ; i < number; i++){
//     serie.push(serie[i - 1] + serie [i-2])
//   }
// const total = serie[number  - 1]
  
// return `Fabionaci serie is= ${serie} \n and th total is ${total}`

// }
// console.log(fabionacci(15));


//exercise 27

// const calculateDays = (num)=>{
//   let years = Math.floor(num/365);
//   let months = Math.floor((num % 365) / 30)
//   let days = Math.floor((num % 365)% 30)

//   return `${years} years, ${months} months, ${days} days`
// }
// console.log(calculateDays(36500));

//exercise 28
// const getFactorial = (number )=>{
//   let total = 1;

// for(let i = 1; i <= number; i++){
//   total *= i;
// }
// return total
// }
// console.log(getFactorial(11));

//exercise 29
// const isCapicua = (num)=>{
//  const toString = num.toString();
//  const toReverse = toString.split('').reverse().join('')
//  return toReverse === toString ? true : false
// }
// console.log(isCapicua(505));


//exercise 30

// const cleanMyArrayFromRepeatNumbersAndStrings = (array)=>{
//   array = array.filter(element => typeof element === 'number');
//   array = array.filter((element, index, array) => array.indexOf(element) === index)
//   return array
// }

// console.log(cleanMyArrayFromRepeatNumbersAndStrings([1,2,3,2,2,1,1,45,6,'cadena']));


//exercise 31 

// const angular = (num)=>{
//   let result = ''
// switch (true) {
//   case (num < 90 ):
//     result = 'angulo agudo'
//     break;

//   case (num === 90):
//     result = 'angulo recto'
//     break;

//   case (num > 90 && num <180):
//     result = 'angulo obtuso'
//     break;

//   case (num === 180 ):
//     result = 'angulo llano'
//     break;

//   case (num > 180 && num <360):
//       result = 'angulo concavo'
//       break;

//   case (num === 360):
//        result = 'angulo completo'
//        break;
//   default:
//     result = 'no existe este perra'
//     break;
// }
// return result

// } 
// console.log(angular(360));


// exeercise 32
// const toSquare = (array)=>{
//   array = array.filter (element => typeof element === 'number');
//   for(let i = 0; i < array.length; i++){
//     array[i] = array[i] * array[i];
//   }
// return array
// }
// const example =[2,2,2,2,2,3,'hola']
// console.log(toSquare(example));


// exercise 33
// class clock {
//   constructor(){
//     this.date = new Date();
//     this.hour = this.date.getHours();
//     this.minutes = this.date.getMinutes();
//     this.seconds = this.date.getSeconds();
//   }

//   update(seconds){
//     this.seconds += seconds;
//     if(this.seconds >= 60){
//       this.minutes += 1;
//       this.seconds = 0
//     } if(this.minutes >= 60){
//       this.hour += 1;
//       this.minutes = 0
//     } if (this.hour >= 24){
//       this.hour = 0
//     }}
   
//   showTime(){
//     this.update(1);
//     console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
//   }

//   turnOn(){
//     setInterval(() => {
//       this.showTime()
//     }, 1000);
//   }
  
// }
// const myClock = new clock();


// myClock.turnOn()


//exercise 34

// const basicOperationWithDiferenteNumbers = (number1,number2)=>{
// let suma = number1 + number2   ;
// let rest = number1 - number2;
// let multiply = number1 * number2;
// let divid = number1/number2;
// const  operation = 
// `${number1} + ${number2} = ${suma} \n 
// ${number1} - ${number2}  ${rest} \n 
// ${number1} * ${number2} ${multiply} \n
// ${number1} / ${number2} ${divid}`
  
// return operation
// }
// console.log(basicOperationWithDiferenteNumbers(23, 21));


//exercise 35

// const newArray = (array)=>{
//   array = cleanTheArray(array)

//   let result = [];
//   result.push(array[0]);
//   result.push(array[array.length -1 ])

//   return result
// }
// const cleanTheArray = (array)=>{
//   array = array.filter(element => typeof element === 'number')
//   return array
// }
// console.log(newArray([2,3,42,1,32,122]));


// exercise 36

// onst vowelsAndConsonans = (textToAnalice)=>{

//  let consonants = 0, vowels = 0, cleanText= '';
 
//  cleanText = textToAnalice
//  .split('')
//  .filter(letter => /[aeiou\w]/gi.test(letter))
//  .join('')

//  for(let letter of cleanText){
//   if(/[aeiou]/gi.test(letter)){
//     vowels++;
//   } else {
//     consonants++;
//   }
//  }
//  return `Vowels:${vowels} Consonants:${consonants}`
// }

// console.log(vowelsAndConsonans('sofia'));c

// exercise 37

// const theModaWord = (array)=>{
//   let conteo= {};
//   let moda = '';
//   let maximo = 0;

//   for ( let element of array){
//     if(conteo[element]){
//       conteo[element]++;
//     } else{
//       conteo[element] = 1
//     }

//     if(conteo[element]>maximo){
//       mo

//       maximo= conteo[element]
//     }
//   }
//   return moda
// }
// console.log(theModaWord(['perro', 'perro', 'gato','gato','gato','gato']));


// exercise 38 
//  const chainSquare = (num)=>{
//   let result = [];

//   for ( let i = 0; i<= num; i++){
//     result[i] = i * i;
//   }
//   return result
//  }
//  console.log(chainSquare(11));

// exercise 39 

// const validateEmail = (email)=>
// {
//  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
// }
//  console.log(validateEmail('adolfoarieldb'));

// exercise 40 

// const minAndMax = (number) => {
//  number.sort((a , b)=>a - b);

//  return `El menor es ${number[0]} \n
//  y el mayor es ${number[number.length - 1]}`;
// }
// const array =[1,23,23,222,4444,3333,33,222,3,44444,5555]
// console.log(minAndMax(array));

//exercise 41
// const drawTree = (numfilas)=>{
// let middle = Math.floor(numfilas);
// let result = '';

// for (let row = 0; row < numfilas; row++){
//   let level = '';
//   for(let column = 0; column < (numfilas * 2); column++){
//     (middle - row <= column && middle + row >= column) ? level += '*' : level +=' ';

//   }
//   result += level + '\n'
// }
// return result
// }

// console.log(drawTree(5));

// exercise 42

// function obtenerNumeroAleatorio(min, max) {
//   return Math.round(Math.random()* (max - min + 1) + max )
// }

// console.log(obtenerNumeroAleatorio(12,20));


// exercise 43 

// const media = (array)=>{
//   let sum = array.reduce((valor1, valor2) =>{
//    return  valor1 + valor2;
//   })
// const result = sum / array.length 
// return result
// }

// console.log(media([10,10,10,9]));


// ecercise 44

// const newArray = (bay)=>{
//   let result=[];
//   for(let word of bay){
//     if(word.split(' ').length >= 2){
//       result.push(word)
//     }
//   }
//   return result
// }
// console.log(newArray(['perro axar', 'scscs', 'acaca', 'eada']));

// exercise 45

// const aprobateOrReoprobated = (alumnos)=>{
//  let aprobados = 0;
//  let reprobados = 0; 
//  for( let prueba of alumnos){
//   prueba[1]>= 6 ? aprobados++:reprobados++
//  }
  
// return `Los que pasaron fueron ${aprobados}, los que la cagaron fueron ${reprobados}`
// }
// console.log(aprobateOrReoprobated([ ["Jorge", 2], ["Mafalda", 10],['Adolfo', 9]]));


// exercise 46

// const subtringsGenerator = (string) => {
//   let substrings = [];

//   // Recorremos las letras por indice
//   for (let letter in string) {
//       let start = parseInt(letter);

//       // restando start evitamos duplicados
//       for (let i = 0; i <= string.length - start ; i++) {
//           let finale = parseInt(start) + parseInt(i);

//           // por donde voy a empezar a cortar el texto?
//           substrings.push(string.substring(start, finale));
//       }

//   }

//   // filtramos eliminando los vacios
//   return substrings.filter(substring => substring.length > 1);
// }
// console.log(subtringsGenerator('adolfo'));

// exercise 47 

// const users = [
//   {name: 'denu', hobbie: ['cine', 'musica', 'bordado']},
//   {name: 'deno', hobbie: ['surf', 'cocina', 'tecnologia']},
//   {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
//   {name: 'denu', hobbie: ['cocina', 'surf', 'tecnologia']},
//   {name: 'denu', hobbie: ['cine', 'bordado', 'cocina']},
//   {name: 'denu', hobbie: ['cine', 'musica', 'tecnologia']},
//   {name: 'denu', hobbie: ['surf', 'cocina', 'bordado']},
//   {name: 'denu', hobbie: ['bordado', 'musica', 'cocina']},
// ];

// const aficionesHuman = (users)=>{
// let result = {};
// for ( let object of users){

// for(let hobbies of object.hobbie){
//   result[hobbies] = (result[hobbies] || 0)+1;
// }
// }
// return result
// }

// console.log(aficionesHuman(users));


//exercise 48

// const repeat = (string)=>{
//   let count={};
//   let result=[];
//   let letters = string.split('').filter(letter => letter.trim().length >=1);

//   for (let letter of letters){
//     if(!count[letter]){
//       count[letter]=1;
//     } else {
//       count[letter]++
//     }
//   }
//   for (let letter in count ){ 
//     if (count[letter] === 1){
//       result.push(letter)
//     }
//   } 
// return `${result}, ${result[0]}`
// }
// console.log(repeat('Hola adolfo'));

//exercise 49
// const Car = {
//   doors:2,
//   wheels:3,
// }
// const review = (object, propObject)=>{
//   return object[propObject]!== 'undefined';
// }
// console.log(review(Car, 'doors'));

//exercise 50

// const contadorDeBucles = (number)=>{
//   let resultado = 0;
//   let aString = number.toString().split('') 

//   for( let numeros of aString){
//     if(numeros === '0' || numeros === '6'){
//       resultado++;
//     }else if (numeros === '8'){
//       resultado += 2;
//     }
    
//   }
// return resultado
//   }
// console.log(contadorDeBucles(8888));

//exercise 51

// const dividimosParesDeInpares =(array)=>{
//   const isThere = (array)=>{
//     return array % 2=== 0;
//   }
//   let par = [];
//   let inpar =[];

//   for( let number of array){
//     if(isThere(number)){
//       par.push(number)
//     }else {
//       inpar.push(number)
//     }
//   }
//   return `los numeros pares son ${par}\n 
//   y los inpares son estos ${inpar}`
// }
// console.log(dividimosParesDeInpares([2,4,6,4,32,5]));

// exercise 52
// const hypotenuse = (sideA , sideB)=>{
//   const newSideA = sideA * sideA;
//   const newSideB = sideB * sideB;
//   return Math.sqrt(newSideA + newSideB);
// };

// console.log(hypotenuse(15,30));

//exercise 53
// const velocity =(vel)=>{
// const metros = 1000/3600;
// return vel * metros;
// }
// console.log(velocity(1));

//exercise 54
// const iterar = (a,b,c)=>{
//   let result =0;
//   let resultAux;
//   b = b.reverse();
//   for(let i = 0; i<a.length;i++){
//     resultAux = parseInt(`${a[i]}${b[i]}`)

//     if( resultAux < c){
//       result++
//     }
//   }


// return result
// }
// console.log(iterar([1, 2, 3], [1, 2, 3], 31));

// exercise 55
// const obtenerLaUltima =(stringToEval)=>{
//   const lastWord = stringToEval.split(' ').pop()
//   return lastWord.length;
// }

// console.log(obtenerLaUltima('Hola mundo soy per'));


// exercise 56
// const getThesintax = (arrayToEval) =>{
//   let answern = '';
//   const theSmallest = (word)=>{
//     return word.reduce((smallestWord, current)=>{
//       return smallestWord.length < current.length ? smallestWord : current;
//     })
//   }
  
//   let minWord = theSmallest(arrayToEval);

//   if(arrayToEval.length === 0)return answern;


//   for (let i = 0; i < minWord.length ; i++){
//     for(let j = 0; j <arrayToEval.length;j++){
//       if(minWord[i] !== arrayToEval[j][i]){
//         return answern
//       }
//     }
//     answern += minWord[i];
//   }


// }
// console.log(getThesintax(['perro', 'perra', 'perre']));

//exercise 57

// const infix = (arrayToEval)=>{
//   let stack = [], result = 0;

//   const isSign = (char) => {
//     return char === '+'|| char === '-'|| char === '*' || char === '/';
//   }

//   for(let i = 0; i < arrayToEval.length ; i++){
//     if(!isSign(arrayToEval[i])){

//        stack.push(arrayToEval[i]);
//     } 
//     else {

//       let a = parseInt(stack.pop());
//       let b = parseInt(stack.pop());

//       switch (arrayToEval[i]) {
//         case '+': result = a + b;
//           break;
//         case '-': result = a - b;
//           break;
//         case '*': result = a * b;
//            break;
//         case '/':result = a / b;
//           break;    
//       }
//       stack.push(result);
//     }
//   }
//   return result;
// }
// console.log(infix(["4", "13", "5", "/", "+"]));

//Exercise 58
// const abecedarioRaro = (title)=>{
//   let answer = 0, pow = 1, titleSize = title.length;

//   for( let i = titleSize -1; i >= 0; i--){
//     let current = title.charCodeAt(1) -64;

//     answer= answer + current * pow;

//     pow = pow * 26;
//   }
//   return answer
// }
// console.log(abecedarioRaro('AA'));

//Exercise 59 

// Exercise 60

// const sumaRecursiva = (actual, resultadoActual = 0)=>{
//   if ( actual ===  0){
//     return resultadoActual
//   }

//   resultadoActual += actual;
//   actual = actual-1;
//   return sumaRecursiva (actual, resultadoActual);

// }


// const sumaIterativa = (limiteSuma)=>{
//   let resultado = 0;
//   for(let i = 0; i <= limiteSuma; i++){
//     resultado += i
//   }
//   return resultado;
// }
// console.log(sumaRecursiva(8), sumaIterativa(6));

// exercise 61
// const sumaRecursiva = (inicio, resultadoActual = 0)=>{
//   if ( inicio %2 !== 0){
//     return 'error'
//   }
//   if (inicio === 0){
//     return resultadoActual
//   }

//   resultadoActual += inicio ;
//   inicio = inicio-2;
// return sumaRecursiva(inicio, resultadoActual)
// }
// console.log(sumaRecursiva(20));

// exercise 62

// const exponenteRecursivo = (numeroBase , exponente , resultadoActual = 0)=>{
//   if( exponente === 1){
//     return numeroBase
//   }
//   if(resultadoActual === 0){
//     resultadoActual = numeroBase
//   }
// resultadoActual = resultadoActual * numeroBase;
// exponente = exponente -1;

// return exponenteRecursivo(numeroBase, exponente, resultadoActual);
// }

// const exponenteIterativo = (numeroBase, exponente)=>{
//   for( let i = 1; i < exponente; i++){
//     numeroBase= numeroBase*numeroBase
//   }

// return numeroBase
// }
//  console.log(exponenteRecursivo(2,2),exponenteIterativo(2,2));

// exercise 64
 //finish
} 
