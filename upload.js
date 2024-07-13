var express = require('express')
const formidable = require('formidable')
const fs = require('fs')
const app = express();
const path = require('path')
const port = (8000)

app.use(express.urlencoded({extended:false}))

app.get('/upload',(req,res) => {
    res.sendFile(__dirname + "/formupload.html");
});


app.post('/uploaded',(req,res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, 'public/css');
    form.parse(req,(err,fields,files) =>{
        if(err){
            res.status(500).send('Error parsing the file upload');
            return;
        }

        const oldPath = files.fupload[0].filepath;
        const newPath = path.join(form.uploadDir , files.fupload[0].originalFilename);
        fs.rename(oldPath, newPath, (err) => {
            if(err){
                res.status(500).send('Error saving the file');
                return;
            }
            res.send('File uploaded successfully');
        });
    });
});

// app.post('/download', (req,res) =>{
//     var path1 = path.join(__dirname + '/public/css')
//     var file = req.body.dload
//     res.download(path1+file)
// });

app.post('/download', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'css', req.body.dload);
    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).send('File not found');
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  