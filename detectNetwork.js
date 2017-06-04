// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var oneDigitPrefix = cardNumber.slice(0, 1);
  var twoDigitPrefix = cardNumber.slice(0, 2);
  var threeDigitPrefix = cardNumber.slice(0, 3);
  var fourDigitPrefix = cardNumber.slice(0, 4);
  var network = '';
  var cardLength = cardNumber.length;

  var dinersClubLength = 14;  
  var amexLength = 15;
  var masterCardLength = 16;
  var visaLength = [13, 16, 19];
  var discoverLength = [16, 19];
  var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19];

  var dinersClubPrefix = ['38', '39'];
  var amexPrefix = ['34', '37'];
  var masterCardPrefix = ['51', '52', '53', '54', '55'];
  var visaPrefix = '4';
  var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maestroPrefix = ['5018', '5020', '5038', '6304'];
  
  if (hasDinersClubPrefix(cardNumber)) {
    if (cardLength === dinersClubLength) {
  		network = "Diner's Club";
  	}
  } else if (hasAmexPrefix(cardNumber)) {
  	if (cardLength === amexLength) {
  		network = "American Express";
  	}
  } else if (hasMasterCardPrefix(cardNumber)) {
  	if (cardLength === masterCardLength) {
  		network = "MasterCard";
  	}
  } else if (oneDigitPrefix === visaPrefix) {
  	if (isVisaCardLength(cardLength)) {
  		network = "Visa";
  	}
  } else if (fourDigitPrefix === discoverPrefix[0] || threeDigitPrefix === discoverPrefix[1] ||
  	         threeDigitPrefix === discoverPrefix[2] || threeDigitPrefix === discoverPrefix[3] ||
  	         threeDigitPrefix === discoverPrefix[4] || threeDigitPrefix === discoverPrefix[5] ||
  	         threeDigitPrefix === discoverPrefix[6] || twoDigitPrefix === discoverPrefix[7]) {
  	if (isDiscoverLength(cardLength)) {
  		network = "Discover";
  	}
  } else if (fourDigitPrefix === maestroPrefix[0] || fourDigitPrefix === maestroPrefix[1] ||
  	         fourDigitPrefix === maestroPrefix[2] || fourDigitPrefix === maestroPrefix[3]) {
  	if (isMaestroLength(cardLength)) {
  		network = "Maestro";
  	}
  }
  return network;
};

function hasDinersClubPrefix(cardNumber) {
  var twoDigitPrefix = cardNumber.slice(0, 2);
  var dinersClubPrefix = ['38', '39'];
  return (twoDigitPrefix === dinersClubPrefix[0] || twoDigitPrefix === dinersClubPrefix[1]);
}

function hasAmexPrefix(cardNumber) {
  var twoDigitPrefix = cardNumber.slice(0, 2);
  var amexPrefix = ['34', '37'];
  for (var i = 0; i < amexPrefix.length; i++) {
  	if (twoDigitPrefix === amexPrefix[i]) {
  		return true;
  	}
  }
  return false;
}

function hasMasterCardPrefix(cardNumber) {
  var twoDigitPrefix = cardNumber.slice(0, 2);
  var masterCardPrefix = ['51', '52', '53', '54', '55'];
  for (var i = 0; i < masterCardPrefix.length; i++) {
  	if (twoDigitPrefix === masterCardPrefix[i]) {
  		return true;
  	}
  }
  return false;
}

function isVisaCardLength(length) {
  return (length === 13 || length === 16 || length === 19);
}

function isDiscoverLength(length) {
  return (length === 16 || length === 19);
}

function isMaestroLength(length) {
  var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19];
  for (var i = 0; i < maestroLength.length; i++) {
  	if (length === maestroLength[i]) {
  		return true;
  	}
  }
  return false;
}
// // tests
// function assertIsEqual(actual, expected, testName) {
//   if (actual === expected) {
//   	console.log('passed');
//   } else {
//   	console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual);
//   }
// }

// function runTestSuite() {
// 	assertIsEqual(detectNetwork('38345678901234'),      "Diner's Club",     'detected network as expected');
// 	assertIsEqual(detectNetwork('39345678901234'),      "Diner's Club",     'detected network as expected');
// 	assertIsEqual(detectNetwork('343456789012345'),     "American Express", 'detected network as expected');
// 	assertIsEqual(detectNetwork('373456789012345'),     "American Express", 'detected network as expected');
// 	assertIsEqual(detectNetwork('4123456789012'),       "Visa",             'detected network as expected');
// 	assertIsEqual(detectNetwork('4123456789012345'),    "Visa",             'detected network as expected');
// 	assertIsEqual(detectNetwork('4123456789012345678'), "Visa",             'detected network as expected');
// 	assertIsEqual(detectNetwork('5112345678901234'),    "MasterCard",       'detected network as expected');
// 	assertIsEqual(detectNetwork('5212345678901234'),    "MasterCard",       'detected network as expected');
// 	assertIsEqual(detectNetwork('5312345678901234'),    "MasterCard",       'detected network as expected');
// 	assertIsEqual(detectNetwork('5412345678901234'),    "MasterCard",       'detected network as expected');
// 	assertIsEqual(detectNetwork('5512345678901234'),    "MasterCard",       'detected network as expected');
// }

