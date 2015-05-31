var prompt = require('prompt')
var random = require('./lib/random');

var schema = {
  properties: {
    numberOfNumbers: {
      description: 'How many rounds do you want do?'.white,
      pattern: /^\d+$/,
      message: 'Number of numbers has to be a number',
      default: 10
    },
    rangeMaximum: {
      description: 'What should the highest number be?'.white,
      pattern: /^\d+$/,
      message: 'The range maximum has to be a number',
      default: 9999
    }
  }
}

console.log('OK, we are starting...');
prompt.start()

prompt.get(schema, function(err, result) {
  if (err) { return onErr(err); }
  var entries = [];
  var entry;
  for (i=0;i<result.numberOfNumbers;i++) {
    prompt.start();
    entry = (i+1) + '). ' + random.integer(result.rangeMaximum);
    entries.push(entry.yellow);
  }
  prompt.get(entries, function(){});
})
