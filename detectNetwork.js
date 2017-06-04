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
  
  var network = '';
  var cardLength = cardNumber.length;
  
  if (hasDinersClubPrefix(cardNumber)) {
    if (isDinersLength(cardLength)) {
  		network = "Diner's Club";
  	}
  } else if (hasAmexPrefix(cardNumber)) {
  	if (isAmexLength(cardLength)) {
  		network = "American Express";
  	}
  } else if (hasMasterCardPrefix(cardNumber)) {
  	if (isMasterCardLength(cardLength)) {
  		network = "MasterCard";
  	}
  } else if (hasVisaPrefix(cardNumber)) {
  	if (isVisaCardLength(cardLength)) {
  		network = "Visa";
  	}
  } else if (hasDiscoverPrefix(cardNumber)) {
  	if (isDiscoverLength(cardLength)) {
  		network = "Discover";
  	}
  } else if (hasMaestroPrefix(cardNumber)) {
  	if (isMaestroLength(cardLength)) {
  		network = "Maestro";
  	}
  } else if (hasChinaUnionPrefix(cardNumber)) {
  	if (isChinaUnionLength(cardLength)) {
  		network = "China UnionPay";
  	}
  } else if (hasSwitchPrefix(cardNumber)) {
  	if (isSwitchLength(cardLength)) {
  		network = "Switch";
  	}
  }
  return network;
};

// helper functions
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

function hasVisaPrefix(cardNumber) {
  var oneDigitPrefix = cardNumber.slice(0, 1);
  var visaPrefix = '4';
  return (oneDigitPrefix === visaPrefix);
}

function hasDiscoverPrefix(cardNumber) {
  var twoDigitPrefix = cardNumber.slice(0, 2);
  var threeDigitPrefix = cardNumber.slice(0, 3);
  var fourDigitPrefix = cardNumber.slice(0, 4);
  var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  return (fourDigitPrefix === discoverPrefix[0] || threeDigitPrefix === discoverPrefix[1] ||
  	      threeDigitPrefix === discoverPrefix[2] || threeDigitPrefix === discoverPrefix[3] ||
  	      threeDigitPrefix === discoverPrefix[4] || threeDigitPrefix === discoverPrefix[5] ||
  	      threeDigitPrefix === discoverPrefix[6] || twoDigitPrefix === discoverPrefix[7]);
}

function hasMaestroPrefix(cardNumber) {
  var fourDigitPrefix = cardNumber.slice(0, 4);
  var maestroPrefix = ['5018', '5020', '5038', '6304'];
  for (var i = 0; i < maestroPrefix.length; i++) {
  	if (fourDigitPrefix === maestroPrefix[i]) {
  		return true;
  	}
  }
  return false;
}

function hasChinaUnionPrefix(cardNumber) {
  var threeDigitPrefix = cardNumber.slice(0, 3);
  var fourDigitPrefix = cardNumber.slice(0, 4);
  var sixDigitPrefix = cardNumber.slice(0, 6);
  for (var prefix = 624; prefix <= 626; prefix++) {
  	if (threeDigitPrefix === prefix.toString()) {
  		return true;
  	}
  }
  for (var prefix = 6282; prefix <= 6288; prefix++) {
  	if (fourDigitPrefix === prefix.toString()) {
  		return true;
  	}
  }
  for (var prefix = 622126; prefix <= 622925; prefix++) {
  	if (sixDigitPrefix === prefix.toString()) {
  		return true;
  	}
  }
  return false;
}

function hasSwitchPrefix(cardNumber) {
  var fourDigitPrefix = cardNumber.slice(0, 4);
  var sixDigitPrefix = cardNumber.slice(0, 6);
  var switchPrefix4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switchPrefix6 = ['564182', '633110'];
  for (var i = 0; i < switchPrefix4.length; i++) {
  	if (fourDigitPrefix === switchPrefix4[i]) {
  		return true;
  	}
  }
  for (var i = 0; i < switchPrefix6.length; i++) {
  	if (sixDigitPrefix === switchPrefix6[i]) {
  		return true;
  	}
  }
  return false;
}



function isDinersLength(length) {
  return (length === 14);
}

function isAmexLength(length) {
  return (length === 15);
}

function isMasterCardLength(length) {
  return (length === 16);
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

function isChinaUnionLength(length) {
  var chinaUnionLength = [16, 17, 18, 19];
  for (var i = 0; i < chinaUnionLength.length; i++) {
  	if (length === chinaUnionLength[i]) {
  		return true;
  	}
  }
  return false;
}

function isSwitchLength(length) {
  var switchLength = [16, 18, 19];
  for (var i = 0; i < switchLength.length; i++) {
  	if (length === switchLength[i]) {
  		return true;
  	}
  }
  return false;
}
















