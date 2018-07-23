var fs = require('fs')
  , util = require('util');

var imports = ['dataset', 'util', 'browser', 'os', 'mobilephone', 'crawler', 'appliance', 'misc', 'woothee'];
var target_path = __dirname + '/../release/woothee.js';

var template = [
  "  var %s = {};",
  "  (function(){",
  "    var exports = %s;",
  "    /* CODE: %s.js */",
  "%s",
  "  })();"
].join("\n"); // name, name, name, code

var generated_timestamp;
var generated_username;
var header_data;
var footer_data;

var exec = require('child_process').exec;
exec('env LANG=C date', function(err, stdout, stderr){
  generated_timestamp = stdout.toString().split("\n").join('');
});
exec('env LANG=C whoami', function(err, stdout, stderr){
  generated_username = stdout.toString().split("\n").join('');
});
fs.readFile(__dirname + '/release_header.js', function(err, data){
  header_data = data.toString();
});
fs.readFile(__dirname + '/release_footer.js', function(err, data){
  footer_data = data.toString();
});

var dumpToFile = function() {
  var defs = [util.format("  // GENERATED from dataset.yaml at %s by %s", generated_timestamp, generated_username)];

  /* Inject package.json into release/woothee.js */
  var package_info = require('../package.json');
  defs.push('');
  defs.push('  // Snapshot from package.json');
  defs.push(util.format("  var package_info = %s;", JSON.stringify(package_info)));
  defs.push('');

  imports.forEach(function(modname){
    var content = fs.readFileSync(__dirname + '/../lib/' + modname + '.js').toString();
    var header_flag = false;

    var code = [];
    content.split("\n").forEach(function(line){
      if (/\/\* HEADER BEGIN \*\//.exec(line)) {
        header_flag = true;
      } else if (/\/\* HEADER END \*\//.exec(line)) {
        header_flag = false;
      } else if (header_flag) {
        // skip
      } else {
        if (line.length > 0)
          code.push('    ' + line);
      }
    });

    defs.push(util.format(template, modname, modname, modname, code.join("\n") + "\n"));
  });

  fs.writeFile(target_path, header_data + defs.join("\n") + footer_data, function(err) { 
     if (err) throw err;
  });
};

var checkcallback = function(){
  if (generated_username && generated_timestamp && header_data && footer_data)
    dumpToFile();
  else
    setTimeout(checkcallback, 100);
};

checkcallback();

