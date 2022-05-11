// const path = require('path');
// const notes = require('./demo.js');


// console.log("path.dirname(notes) value is ", path.dirname(notes))
// console.log("path.basename(notes) value is", path.basename(notes))
// console.log("path.extname(notes) value is", path.extname(notes))

const func = require('./demo.js')

console.log("sum is", func.add());
console.log("sub is", func.sub());
console.log("mult is", func.mult());
console.log("div is", func.div());