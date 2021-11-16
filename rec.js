const fs = require('fs');

let ar = []
//This will sort out Txt file sorting
require('fs').readFileSync('./dic/ka-words.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
    line = line.replace(/\d+|^\s+|\s+$/g,'').replace(/\s+/g, '');
    ar.push(line);
});



fs.writeFileSync('jsdic.json', JSON.stringify(ar))
