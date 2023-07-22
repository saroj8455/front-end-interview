const p = {
  age:29
}
/**
 *
 * @param {*} person
 * @returns
 *
 * Author : Web Dev Simplifed
 * Guard clauses
 */

function canDrinkBetter(person) {
  if(person?.age == null) {
    console.log('You are not a person');
    return; // end the execution
  }
  /**
   *
   * Guard clauses example
   */

  // if(person.age < 18 ) {
  //   console.log('Nope 👎');
  //   return;
  // }
  // if(person.age < 21) {
  //   console.log('Not in the US 😂');
  //   return
  // }
  // console.log('Yes you can, 👍');
  //  extract functions
  const result = canDrinkResponse(person.age)
  console.log(result);


}
function canDrinkResponse(age) {
  if(age<18) return "Nope 😂"
  if(age<21) return "Not in the US 😊"
  return "Yes ☺🙂"
}
canDrinkBetter(p)


/**
 *  13 must know javascript higher order functions & array methods
 *
 */
import {products} from './products.js'
// filter products by category and price range using reduce function with map method inside it to get only required
// filter function to get products with price greater than or equal to a given value

// forEach
products.forEach((p,index)=>{
  // log product index and titles
  // console.log(index+'index '+p.title);
})
// map return a new array
const titles = products.map(p=>p.title)
// console.log(titles); log titles
const DIS_AMT = 2.5;
const discoutPrice = products.map(p=>{
  return Math.round(p.price - DIS_AMT);
})
// console.log(discoutPrice); return the discount price and round the number
// filter method
const highPrice = products.filter((p)=>p.price >=100).map(p=>p.title)
// console.log(highPrice);

const firstProduct= products.find(p=>p.price>100)
// console.log(firstProduct);

// filter method calculate the element based on condition
const numbers = [1,5,6,11,20,45,10]
const greaterTen = numbers.filter(n=>n>=10)
console.log(greaterTen);
























































