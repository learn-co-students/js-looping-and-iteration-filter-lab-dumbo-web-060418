// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (collection, string) {
  let stringLength = string.length;
  return collection.filter(function (name) {
    return name.slice(0, stringLength) === string;
  });
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
