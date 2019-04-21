var expect = require('chai').expect;
var testsubject = require('../index');

describe('test function', ()=>{
  it('subtracts num2 from num1',()=>{
    expect(testsubject.subtract(3,1)).equal(2);
  });
})