// Code your solution in this file
function findMatching(collection, name){
  const people = [];
  for (const person of collection) {
    if (person.toLowerCase() === name.toLowerCase()) {
      people.push(person);
    }
  }
  return people;
}

function fuzzyMatch(drivers, letters){
  const people = [];
  for (const person of drivers){
    if (person.startsWith(letters)){
      people.push(person);
    }
  }
  return people;
}

function matchName(drivers, name){
  const newObjects = [];
  for (const obj of drivers){
    if (obj.name === name){
      newObjects.push(obj);
    }
  }
  return newObjects;
}
