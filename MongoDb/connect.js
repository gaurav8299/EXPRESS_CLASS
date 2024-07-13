const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/academic")
.then(() => {
    console.log("Connection Successfull");
}).catch((err) =>{
    console.log("No Connection $(err)");
})

var sch = new mongoose.Schema({
    uname:{type:String, required:true, trim:true},
    email:{type:String, required:true,trim:true,unique:true},
    password:{type:String, required:true}
})

const student = mongoose.model('Register', sch)


// const savedb = async()=>{
//     let data = new student({uname:"Ritvik", email:"gauravrajput3005@gmail.com", password:"123456789"})
//     const result = await data.save();
//     console.log(result);
// }
// savedb();


// const insert = async() =>{
//     let data = await student.insertMany([
//         {uname:'Mahi',email:"mahi@gmail.com",password:"74564"},
//         {uname:"John", email:"john@gmail.com",password:"1234565"}
//     ])
//     console.log(data)
// }
// insert();


// const update = async()=>{
//     let data = await student.updateMany(
//         {'uname':'Ritvik'},{$set:{'password':8299}}
//     )
//     console.log(data)
// }

// update();


// const find = async() =>{
//     let data = await student.find()
//     console.log(data)
// }

// const remove = async() =>{
//     let data = await student.deleteOne({'uname':'Mahi'})
//     console.log(data)
// }

// find();
// remove();
// module.exports=student


student.find()
.then((msg)=>{
    console.log(msg)
})
.catch(err=>{
    console.log(err)
})

student.findOneAndUpdate(
    {
        'uname':"Ritvik"
    },
    {
        password:"765181"
    },
    {
        new: true,
    }
)
.then
.catch(err =>{
    console.log(err)
})