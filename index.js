var funcionesArimeticas = require('./formulas-arimeticas.js')

funcionesArimeticas.sumar(5,2)
funcionesArimeticas.restar(5,2)
funcionesArimeticas.dividir(5,2)
funcionesArimeticas.multiplicar(5,2)


var {
atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} = require('mathjs')

// functions and constants
round(e, 3)                    // 2.718
atan2(3, -3) / pi              // 0.75
log(10000, 10)                 // 4
sqrt(-4)                       // 2i
pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]
derivative('x^2 + x', 'x')     // 2 * x + 1

// expressions
evaluate('12 / (2.3 + 0.7)')   // 4
evaluate('12.7 cm to inch')    // 5 inch
evaluate('sin(45 deg) ^ 2')    // 0.5
evaluate('9 / 3 + 2i')         // 3 + 2i
evaluate('det([-1, 2; 3, 1])') // -7

// chaining
chain(3)
    .add(4)
    .multiply(2)
    .done()  // 14




























//sumar.sumar(1,2)



// let numero1 = 5
// let numero2 = 2
// let suma = numero1 + numero2

// console.log("Hola mundo " + suma)

/*

import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
  } from 'mathjs'

  var mathjs = require('mathjs')
  
  // functions and constants
  round(e, 3)                    // 2.718
  atan2(3, -3) / pi              // 0.75
  log(10000, 10)                 // 4
  sqrt(-4)                       // 2i
  pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]
  derivative('x^2 + x', 'x')     // 2 * x + 1
  
  // expressions
  evaluate('12 / (2.3 + 0.7)')   // 4
  evaluate('12.7 cm to inch')    // 5 inch
  evaluate('sin(45 deg) ^ 2')    // 0.5
  evaluate('9 / 3 + 2i')         // 3 + 2i
  evaluate('det([-1, 2; 3, 1])') // -7
  
  // chaining
  chain(3)
      .add(4)
      .multiply(2)
      .done()  // 14

*/