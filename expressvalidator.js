var express = require('express')
//var express = require('express-validator');
var app =  express()
const {check, validationResult } = require('express-validator');
app.use(express.urlencoded({extended: false}));



app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname+'example.html')
})

app.post('/validateData', [
    check('email', 'Email length should be 10 to 30 characters')
    .isEmail().isLength({ min: 10, max: 30}),

    check('name', 'Name length should be 10 to 20 characters')
    .isLength({min: 10, max: 20}),

    check('mobile', 'Mobile number should contains 10 digit')
    .isLength({min: 10, max: 20}),

    check('password', 'Password should be 8 to 10 characters')
    .isLength({min: 8, max: 10})
],(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json(errors)
    }
    else{
        res.send("Successfully Validated")

    }
}); app.listen(8000)