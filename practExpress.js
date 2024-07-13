const express = require('express');
var body1 = require('body-parser')
var encoded = body1.urlencoded({extended:false})

const app = express();

app.get('/',(req,res)=>{
    res.send(`<h1><B>Hello <br> Students </B></h1> <br>
     <a href = '/json'>Find the Factorial</a> <br>
     <a href = '/formget'>Form of get method.</a> <br>
      <a href = '/formpost'>form of post method.</a> <br>  
        `)
});
// app.listen(8008, () => {
//     console.log('Server is listening on port 8008');
//   });


app.get('/formget',(req, res) => {
    res.sendFile(__dirname+'/getForm.html')
});


app.get('/formprocess',(req , res) => {
    var fname = req.query.fname
    var lname = req.query.lname
    res.json({
        firstName:fname,
        lastname:lname
    })
})

app.get('/formpost', (req, res) => {
    res.sendFile(__dirname+"/postForm.html")
})

app.post('/formprocess1',encoded,(req, res) => {
    var name = req.body.fname
    var lname = req.body.lname
    res.send({"name":name,"lname":lname})
})


app.get('/json', (req,res) =>{
    res.sendFile(__dirname+"num.html")
})

app.post('/check', encoded,(req,res) => {
    var num = req.body.num
    function fact(num){
        if(num==1){
            
        }
    }
})


app.listen(8008, () => {
    console.log('Server is listening on port 8008');
  });


 

