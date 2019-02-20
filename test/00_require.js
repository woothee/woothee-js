var fs = require('fs');
var files = fs.readdirSync('lib');
var expect = require('chai').expect;
var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it

describe('woothee', function(){
  it('should be required successfully', function(){
    files.forEach(function(f){
      var modname = (/^(.*)\.js$/.exec(f) || [null,null])[1];
      if (! modname)
        return;
      var x = require('../lib/' + modname);
    });
  });

  it('should have valid version', function(){
    var woothee = require('./../lib/woothee');
    expect(woothee.VERSION).to.match(/^[0-9]+\.[0-9]+\.[0-9]+$/);
  });
});
