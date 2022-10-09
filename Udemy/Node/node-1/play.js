const name = 'Max';
let age = 34;
var Nazi = true;

function summerizeUser(userName, userAge, userHeilHittler) {
  return (
     `name is ${userName} age is ${userAge} and the user is a Nazi: ${userHeilHittler}`)
}

console.log(summerizeUser(name, age, Nazi))

// -----------------------------------------------------------------------------------------
const resumeUser = (userName, userAge, userHeilHittler) => 
   {
  return (
     `name is ${userName} age is ${userAge} and the user is a Nazi: ${userHeilHittler}`)
}

console.log(resumeUser(name, age, !Nazi))
// -----------------------------------------------------------------------------------------

const add = (a, b) => a + b;

console.log(add(14, 15))

// -----------------------------------------------------------------------------------------

const person = {
  name: 'Max',
  age: 104,
  greet() {
    console.log(`Hi, i am ${this.name}, i am ${this.age}`)
  }
}

person.greet();

// -----------------------------------------------------------------------------------------

const hobbies = ['porn', 'sports', 'rape', 'puppies'];
for (let hobby of hobbies) {
  console.log(hobby)
}
// -----------------------------------------------------------------------------------------

console.log(hobbies.map(hobby => `Hobby: ${hobby}`))
// -----------------------------------------------------------------------------------------
const salut = ({ name }) => console.log(name);

salut(person);