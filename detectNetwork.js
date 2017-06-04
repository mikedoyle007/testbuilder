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
  var prefix = cardNumber.slice(0, 2);
  var network = '';
  var cardLength = cardNumber.length;

  var dinersClubLength = 14;  
  var amexLength = 15;
  var masterCardLength = 16;
  var visaLength = [13, 16, 19];

  var dinersClubPrefix = ['38', '39'];
  var amexPrefix = ['34', '37'];
  var masterCardPrefix = ['51', '52', '53', '54', '55'];
  var visaPrefix = '4';
  
  if (cardLength === dinersClubLength) {
  	if (prefix === dinersClubPrefix[0] || prefix === dinersClubPrefix[1]) {
  		network = "Diner's Club";
  	}
  } else if (cardLength === amexLength) {
  	if (prefix === amexPrefix[0] || prefix === amexPrefix[1]) {
  		network = "American Express";
  	}
  } else if (cardLength === masterCardLength) {
  	for (var i = 0; i < masterCardPrefix.length; i++) {
  	  if (prefix === masterCardPrefix[i]) {
  		network = "MasterCard";
  	  }	
  	}
  	if (prefix[0] === visaPrefix) {
  		network = "Visa";
  	}  	
  } else if (isVisaCardLength(cardLength)) {
  	if (prefix[0] === visaPrefix) {
  		network = "Visa";
  	}
  } 
  return network;
};

function isVisaCardLength(length) {
  return (length === 13 || length === 16 || length === 19);
}

// tests
function assertIsEqual(actual, expected, testName) {
  if (actual === expected) {
  	console.log('passed');
  } else {
  	console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual);
  }
}

function runTestSuite() {
	assertIsEqual(detectNetwork('38345678901234'),      "Diner's Club",     'detected network as expected');
	assertIsEqual(detectNetwork('39345678901234'),      "Diner's Club",     'detected network as expected');
	assertIsEqual(detectNetwork('343456789012345'),     "American Express", 'detected network as expected');
	assertIsEqual(detectNetwork('373456789012345'),     "American Express", 'detected network as expected');
	assertIsEqual(detectNetwork('4123456789012'),       "Visa",             'detected network as expected');
	assertIsEqual(detectNetwork('4123456789012345'),    "Visa",             'detected network as expected');
	assertIsEqual(detectNetwork('4123456789012345678'), "Visa",             'detected network as expected');
	assertIsEqual(detectNetwork('5112345678901234'),    "MasterCard",       'detected network as expected');
	assertIsEqual(detectNetwork('5212345678901234'),    "MasterCard",       'detected network as expected');
	assertIsEqual(detectNetwork('5312345678901234'),    "MasterCard",       'detected network as expected');
	assertIsEqual(detectNetwork('5412345678901234'),    "MasterCard",       'detected network as expected');
	assertIsEqual(detectNetwork('5512345678901234'),    "MasterCard",       'detected network as expected');
}

