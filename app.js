require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require('path'); //core module in node for dealing with file paths.
const app = express();


// adding middleware body-parser for urlencoded and json that is data parsing.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// step1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        // user:'shamilysasidharan111@gmail.com',
        // pass:'12345'
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


// step2
let mailOptions = {
    from: 'shamusham663@gmail.com',
    to: 'curlygirlb07@gmail.com',
   subject:'sending email using node.js',
   text:`sending the mail was successfull`
};

// step3
transporter.sendMail(mailOptions,function(err,data){
    if(err){
        console.log("An Error Occured",err);
    }
    else{
        console.log("Message Sent!!!!!" + data.info)
    }
});




// app.post("/home", (req, res) => {
//     console.log('Data:',req.body);
//     res.json({ message: "Message received!!!" })
// });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})





app.listen(3000, () => {
    console.log("The Server Is Running At Port 3000")
});

