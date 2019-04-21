const _ = require('lodash');
const fs = require('fs');
const fetch = require('node-fetch');
// const numbers = require('./numbers.js');
const data = require('./data.json');

// fs.readFile('./data.json', 'utf-8', (err,data)=>{
//   if(err){
//     console.log('err :', err);
//   }
//   const data2 = JSON.parse(data);
//   console.log('data from readFile :', data2);
// })


// console.log('data from require :', data);

const a = 1;
const b = 2;
const c = a + b;

const subtract=(num1,num2)=>{
  return num1-num2;
}

module.exports = {
  subtract
}