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
