// const amount = 3

// if(amount < 10){
//     console.log('small number');
// }else {
//     console.log('large number');
// }
// console.log('Hey its my First node app!!!');

// console.log(__dirname);
// setInterval(() => {
//     console.log('Hello world');
// }, 1000)


//Modules 
//CommonJS, every file is Module (by default)
//Modules- Encapsulated Code (Only share minimum)
const names = require('./names')

const sayHi = require('./5-utilities')
const data =require('./6-alternative-flavor')
require('./mind-grenade')


// console.log(data);
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)