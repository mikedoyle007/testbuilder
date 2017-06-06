/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567890123456').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '4567890123456').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '4567890123456789').should.equal('Discover');
      });
    })(prefix)
  }

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card

  for (var prefix = 5018, length = 12; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '56789012';
        if      (length === 13) {cardNum += '3';}
        else if (length === 14) {cardNum += '34';}
        else if (length === 15) {cardNum += '345';}
        else if (length === 16) {cardNum += '3456';}
        else if (length === 17) {cardNum += '34567';}
        else if (length === 18) {cardNum += '345678';}
        else if (length === 19) {cardNum += '3456789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('Maestro');
      });
    })(prefix)
  }
  
  for (var prefix = 5020, length = 12; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '56789012';
        if      (length === 13) {cardNum += '3';}
        else if (length === 14) {cardNum += '34';}
        else if (length === 15) {cardNum += '345';}
        else if (length === 16) {cardNum += '3456';}
        else if (length === 17) {cardNum += '34567';}
        else if (length === 18) {cardNum += '345678';}
        else if (length === 19) {cardNum += '3456789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('Maestro');
      });
    })(prefix)
  }

  for (var prefix = 5038, length = 12; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '56789012';
        if      (length === 13) {cardNum += '3';}
        else if (length === 14) {cardNum += '34';}
        else if (length === 15) {cardNum += '345';}
        else if (length === 16) {cardNum += '3456';}
        else if (length === 17) {cardNum += '34567';}
        else if (length === 18) {cardNum += '345678';}
        else if (length === 19) {cardNum += '3456789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('Maestro');
      });
    })(prefix)
  }

  for (var prefix = 6304, length = 12; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '56789012';
        if      (length === 13) {cardNum += '3';}
        else if (length === 14) {cardNum += '34';}
        else if (length === 15) {cardNum += '345';}
        else if (length === 16) {cardNum += '3456';}
        else if (length === 17) {cardNum += '34567';}
        else if (length === 18) {cardNum += '345678';}
        else if (length === 19) {cardNum += '3456789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('Maestro');
      });
    })(prefix)
  }
});

describe('should support China UnionPay', function() {

  for (var prefix = 624, length = 16; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '4567890123456';
        if      (length === 17) {cardNum += '7';}
        else if (length === 18) {cardNum += '78';}
        else if (length === 19) {cardNum += '789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('China UnionPay');
      });
    })(prefix)
    if (length === 19 && prefix < 626) {
      prefix++;
      length = 15;
    } 
  }

  for (var prefix = 6282, length = 16; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '567890123456';
        if      (length === 17) {cardNum += '7';}
        else if (length === 18) {cardNum += '78';}
        else if (length === 19) {cardNum += '789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('China UnionPay');
      });
    })(prefix)
    if (length === 19 && prefix < 6288) {
      prefix++;
      length = 15;
    } 
  }

  for (var prefix = 622126, length = 16; length <= 19; length++) {
    (function(prefix) {
      var cardNum = '7890123456';
        if      (length === 17) {cardNum += '7';}
        else if (length === 18) {cardNum += '78';}
        else if (length === 19) {cardNum += '789';}
      it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
        detectNetwork(prefix + cardNum).should.equal('China UnionPay');
      });
    })(prefix)
    if (length === 19 && prefix < 622925) {
      prefix++;
      length = 15;
    } 
  }
});

describe('should support Switch', function() {

  for (var i = 0; i < 2; i++) {  
    var prefix = [564182, 633110];
    for (var length = 16; length <= 19; length++) {
      (function(prefix) {
        if (length === 17) {length++;}
        var pre = prefix[i];
        var cardNum = '7890123456';
          if      (length === 18) {cardNum += '78';}
          else if (length === 19) {cardNum += '789';}
          var card = pre.toString().concat(cardNum);
        it('has a prefix of ' + prefix[i] + ' and a length of ' + length, function() {
          detectNetwork(card).should.equal('Switch');
        });
      })(prefix) 
    }
  }

  for (var i = 0; i < 6; i++) {  
    var prefix = ['4903', '4905', '4911', '4936', '6333', '6759'];
    for (var length = 16; length <= 19; length++) {
      (function(prefix) {
        if (length === 17) {length++;}
        var pre = prefix[i];
        var cardNum = '567890123456';
          if      (length === 18) {cardNum += '78';}
          else if (length === 19) {cardNum += '789';}
          var card = pre.toString().concat(cardNum);
        it('has a prefix of ' + prefix[i] + ' and a length of ' + length, function() {
          detectNetwork(card).should.equal('Switch');
        });
      })(prefix) 
    }
  }




  // function test1(prefix, length) {
  //   it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
  //     var cardNumber = '7890123456';
  //     if (length === 18) {
  //       cardNumber.concat('78');
  //     } else if (length === 19) {
  //       cardNumber.concat('789');
  //     }
  //     detectNetwork(prefix.toString().concat(cardNumber)).should.equal('Switch');
  //   })
  // }
  
  // function test2(prefix, length) {
  //   it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
  //     var cardNumber = '567890123456';
  //     if (length === 18) {
  //       cardNumber.concat('78');
  //     } else if (length === 19) {
  //       cardNumber.concat('789');
  //     }
  //     detectNetwork(prefix.toString().concat(cardNumber)).should.equal('Switch');
  //   })
  // }

  // for (var prefix = 564182, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test1(prefix, length);
  // }
  // for (var prefix = 633110, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test1(prefix, length);
  // }
  // for (var prefix = 4903, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test2(prefix, length);
  // }
  // for (var prefix = 4905, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test2(prefix, length);
  // }
  // for (var prefix = 4911, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test2(prefix, length);
  // }
  // for (var prefix = 4936, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test2(prefix, length);
  // }
  // for (var prefix = 6333, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test2(prefix, length);
  // }
  // for (var prefix = 6759, length = 16; length <= 19; length++) {
  //   if (length === 17) {
  //     length++;
  //   }
  //   test2(prefix, length);
  // }
})














