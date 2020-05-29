var exampleData = [
  {
    id: 101,
    firstName: "Jenny",
    metersFromUser: 5193,
  },
  {
    id: 204,
    firstName: "Nigel",
    metersFromUser: 245,
  },
  {
    id: 33,
    firstName: "Andreas",
    metersFromUser: 78,
  },
  {
    id: 443,
    firstName: "Boris",
    metersFromUser: 8331,
  },
];

// P: Parameters = profileArray; function name = nearestDriver
// R: return: driver id of closest driver (number data type)
// E: Example: from the provided "exampleData" => we expect a result of 33
// P: Pseudocode - see pseudocode throughout

function nearestDriver(profileArray) {
  // Create a variable that holds the closest driver so far
  var closestDriverSoFar = profileArray[0];

  // Loop through the array of objects
  for (i = 0; i < profileArray.length; i++) {
    // During each iteration, check if metersFromUser of current object
    // is less than metersFromUser of the closest driver so far.
    if (profileArray[i].metersFromUser < closestDriverSoFar.metersFromUser) {
      // If true, set the current object equal to the closest driver so far.
      closestDriverSoFar = profileArray[i];
    }
  }

  // Return the id of the closest driver so far
  return closestDriverSoFar.id;
}

console.log(nearestDriver(exampleData));
