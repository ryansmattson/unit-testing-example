var addOne = require('../src/app.js').addOne;
var expect = require('chai').expect;

//2 arguments: 'what this is doing', callback test that you want to write.
describe('testing the addOne function', function(){

  //2 arguments: 'what the specific test does',
  it('should add 1 to the argument', function(){
    //Actual test code.
    var number = 42;
    var result = addOne(number);

    expect(result).to.equal(43);
  })

  //it(...);

  //describe(...)



});
