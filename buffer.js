var buffer = Buffer.from('this is node js class');
var buffer1 = Buffer.alloc(50)
var buffer2 = buffer.copy(buffer1,5)
console.log(buffer1.toString())
// console.log(buffer);
// console.log(buffer.toString)