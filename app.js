const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = [
  'Liam',
  'Noah',
  'Oliver',
  'William',
  'Elijah',
  'James',
  'Benjamin',
  'Lucas',
  'Mason',
  'Ethan',
  'Alexander',
  'Henry',
  'Jacob',
  'Michael',
  'Daniel',
  'Logan',
  'Jackson',
  'Sebastian',
  'Jack',
  'Aiden',
];
const femaleNames = [
  'Olivia',
  'Emma',
  'Ava',
  'Sophia',
  'Isabella',
  'Charlotte',
  'Amelia',
  'Mia',
  'Harper',
  'Evelyn',
  'Abigail',
  'Emily',
  'Ella',
  'Elizabeth',
  'Camila',
  'Luna',
  'Sofia',
  'Avery',
  'Mila',
  'Aria',
];
const lastNames = [
  'McCarthy',
  'Cunningham',
  'Fischer',
  'Donnelly',
  'Bush',
  'Herbert',
  'Crawford',
  'Walters',
  'Potter',
  'Cox',
  'Farmer',
  'Wolf',
  'Whelan',
  'Harrington',
  'Morgan',
  'Stevenson',
  'Richardson',
  'Steele',
  'Black',
  'Spence',
];
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

const selectPerson = () => {
  for (let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);
    person.firstName =
      person.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * 61) + 18;

    const number = () => Math.floor(Math.random() * 10);
    person.phone = `${number()}${number()}${number()}-${number()}${number()}${number()}-${number()}${number()}${number()}`;
    person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@.gmail.com`;

    people.push(person);
  }
};
selectPerson();

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
