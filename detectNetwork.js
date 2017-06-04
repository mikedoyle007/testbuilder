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

  var dinersClubPrefix = ['38', '39'];
  var amexPrefix = ['34', '37'];
  var masterCardPrefix = ['51', '52', '53', '54', '55'];
  var visaPrefix = '4';
  var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  
  if (twoDigitPrefix === dinersClubPrefix[0] || twoDigitPrefix === dinersClubPrefix[1]) {
    if (cardLength === dinersClubLength) {
  		network = "Diner's Club";
  	}
  } else if (twoDigitPrefix === amexPrefix[0] || twoDigitPrefix === amexPrefix[1]) {
  	if (cardLength === amexLength) {
  		network = "American Express";
  	}
  } else if (twoDigitPrefix === masterCardPrefix[0] || twoDigitPrefix === masterCardPrefix[1] ||
  	         twoDigitPrefix === masterCardPrefix[2] || twoDigitPrefix === masterCardPrefix[3] ||
  	         twoDigitPrefix === masterCardPrefix[4]) {
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
  }


  // else if (cardLength === masterCardLength) {
  // 	for (var i = 0; i < masterCardPrefix.length; i++) {
  // 	  if (prefix === masterCardPrefix[i]) {
  // 		network = "MasterCard";
  // 	  }	
  // 	}
  // 	if (prefix[0] === visaPrefix) {
  // 		network = "Visa";
  // 	}  	
  // } else if (isVisaCardLength(cardLength)) {
  // 	if (prefix[0] === visaPrefix) {
  // 		network = "Visa";
  // 	}
  // } 
  return network;
};

function isVisaCardLength(length) {
  return (length === 13 || length === 16 || length === 19);
}

function isDiscoverLength(length) {
  return (length === 16 || length === 19);
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

