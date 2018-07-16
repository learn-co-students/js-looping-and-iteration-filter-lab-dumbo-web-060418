// Code your solution in this file
function findMatching(collection, name) {
  console.log('\n')
  console.log('\n')
  const matchingDrivers = []
  for (const driver of collection) {
     if (driver.toLowerCase() === name.toLowerCase()) {
      matchingDrivers.push(driver)
    }
  }
  return matchingDrivers;
}

  function fuzzyMatch(collection, letters) {
    const fuzzyNames = []
    for (const driver of collection) {
      if(driver.startsWith(letters)) {
        fuzzyNames.push(driver)
      }
    }
    return fuzzyNames;
  }

function matchName(collection, name) {
  const names = []
  for (const driver of collection) {
    if(driver.name === name) {
      names.push(driver)
    }
  }
  return names;
}
