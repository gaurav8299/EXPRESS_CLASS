var express = require('express')
var cookieparser = require('cookie-parser')
var app = express()
var cookiesession = require('cookie-session')
var myLogger = function(req,res,next){
    console.log('Function LOGGED')
    next()
}

// var myLogger2 = function(req,res,next){
//     console.log(`${req.originalUrl}`)
//     next()
// }

// app.use(myLogger)
// app.use(myLogger2)

// var logger3 = [myLogger,myLogger2]

app.use((req,res,next)=>{
    console.log(Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send("Hi")
})



app.use(myLogger)
app.use('/method',(req,res,next)=>{
    console.log(req.method)
    res.send(req.method)
    next()
})

app.get('user:id', (req,res,next)=>{
    console.log('ID: ', req.params.id)
    next()
}, (req,res,next) =>{
    res.send('User Info')
})





//---------------ROUTER LEVEL MIDDLEWARE------------------------------------//

var router = express.Router()
router.use((req,res,next)=>{
    console.log(req.originalUrl)
    res.send(req.originalUrl)
    next()
})


//-----------ERROR MIDDLEWARE----------------------------------//

app.get('/roter',router)


app.get('/error',(req,res)=>{
    throw new Error
});

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send('Something Broke!!!')
})

//-----------------Built-In Middleware---------------------//

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.get('/built',(req,res)=>{
    res.sendFile(__dirname+"/postForm.html")
})

app.post('/formprocess1', (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

var path = require('path')
var path1 = path.join(__dirname,"/public/css")
console.log(path1)
app.use(express.static(path1))



// cookies

app.use(cookieparser())
app.get('/th', (req,res)=>{
    res.cookie('username', 'John Doe', {maxAge:20000000});
    res.cookie('password', '123', {maxAge:20000000});
    console.log(req.cookies);
    res.send('cookies parsed and set');
});


//-------------------- COOKIES-SESSION------------------------//

app.get('/th', (req,res)=>{
    res.cookie('username', 'John Doe', {maxAge:200000});
    res.cookie('password', '123', {maxAge:200000});
    console.log(req.cookies);
    res.send('cookies parsed and set');
});



app.use(cookiesession({
    name: 'session',
    keys:['key1','key2'],
    maxAge:24 * 60 * 60 * 1000,
    resave:true,
}));

app.get('/third',(req,res) =>{
    req.session.cookieName = 'Ritvik';
    res.send('Cookie set!!');
});

app.get('/read-cookie', (req, res) => {
    const regularCookie=req.cookies.username;
    const sessionCookie = req.session.cookieName;
    res.send(`regularCookie:${regularCookie}, Cookie value: ${sessionCookie}`);
    });





app.listen(8008)