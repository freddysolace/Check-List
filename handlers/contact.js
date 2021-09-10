const Contact = require('../models/contact');
const express = require('express');
const nodemailer = require("nodemailer");

exports.send_message = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
      

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'Checklist.app.task@gmail.com', // generated ethereal user
          pass: 'checklist2021', // generated ethereal password
        },
      });

      let mailDetails = {
           // Checklist.app.task@gmail.com
        from: '"Checklist Contact" <email>', // sender address
        to: "fredricaarthurmaame@gmail.com", // list of receivers
        subject: "Checklist email request", // Subject line
        text: message, // plain text body
        // html: "<b>Hello world?</b>", // html body
      }
    
      // send mail with defined transport object
      transporter.sendMail(mailDetails, function(err,data) {
       if (err){
           console.log(err);
       }else {
           console.log("Email sent successfully")
           console.log(data);
           res.redirect('index');
       }
      });
 
}