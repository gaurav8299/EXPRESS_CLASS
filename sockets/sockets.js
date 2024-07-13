const express=require('express');
const app=express();
const socketIO=require('socket.io');
const server=app.listen(3001,()=>{
console.log("Server Started");
})
const io=socketIO(server);
const path=require('path');
app.use(express.static(path.join(__dirname)))
io.on('connection',(socket)=>{
console.log("A user has connected to server");
socket.on('name',msg=>{
io.emit('name',msg);
})
socket.on('chat message',msg=>{
io.emit('chat message',msg);
})
})