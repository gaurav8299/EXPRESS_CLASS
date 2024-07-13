const express = require('express');
const app = express();
// app.get('/admin', (req, res) => {
//     res.status(200);
//   res.send('Hello World!!!' );
// });
// app.listen(8080, () => {
//   console.log('Server is listening on port 8080');
// });


app.get('/style', (req, res)=>{
  res.send(`<a href = '/'>Vist</a>`)
})
app.get('/json',(req, res) => {
  var obj = {a:"a", b:"b"}
  var obj1 = JSON.stringify(obj)
  res.send(obj1)
});


app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});