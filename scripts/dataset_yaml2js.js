var fs = require('fs')
  , util = require('util')
  , yaml = require('js-yaml');

var dataset_entries = yaml.safeLoad(fs.readFileSync(__dirname + '/../woothee/dataset.yaml', 'utf8'))
  , js_file = __dirname + '/../lib/dataset.js';

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

fs.readFile(__dirname + '/dataset_header.js', function(err, data){
  header_data = data.toString();
});
fs.readFile(__dirname + '/dataset_footer.js', function(err, data){
  footer_data = data.toString();
});

var dumpToFile = function() {
  var defs = [util.format("// GENERATED from dataset.yaml at %s by %s\nvar obj;", generated_timestamp, generated_username)];

  dataset_entries.forEach(function(dataset){
    var label = dataset.label
      , name = dataset.name
      , type = dataset.type;
    defs.push("obj = {label:'" + label + "', name:'" + name + "', type:'" + type + "'};");
    if (type === 'browser') {
      defs.push("obj['vendor'] = '" + dataset.vendor + "';");
    } else if ( type === 'os') {
      defs.push("obj['category'] = '" + dataset.category + "';");
    } else if ( type === 'full') {
      defs.push("obj['vendor'] = '" + (dataset.vendor ? dataset.vendor : '') + "';");
      defs.push("obj['category'] = '" + dataset.category + "';");
      if (dataset.os) {
        defs.push("obj['os'] = '" + dataset.os + "';");
      }
    }
    defs.push("DATASET[obj.label] = obj;");
  });

  fs.writeFile(js_file, header_data + defs.join("\n") + footer_data);
};

var checkcallback = function(){
  if (generated_username && generated_timestamp && header_data && footer_data)
    dumpToFile();
  else
    setTimeout(checkcallback, 100);
};

checkcallback();
