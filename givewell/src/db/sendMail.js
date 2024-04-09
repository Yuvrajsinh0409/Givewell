const nodemailer = require("nodemailer");


const sendEmail = (email,otp)=>{
    return new Promise((resolve , reject)=>{
        let transporter = nodemailer.createTransport(
            {
                service:"gmail",
                auth:{
                    user:"yuvrajsinhbodana@gmail.com",
                    pass:"ltmzxhaobcsaalgm"
                }  
            }
        )
 
        // let OTP = require("./math");  
        const email_conf = {
            from:"yuvrajsinhbodana@gmail.com",
            to:`${email}`,
            subject:"OTP for User Registration",
            text:`This is a testing email sent to you using node js..!! and your otp is ${otp}\n`,
            html:`
            <div style="margin-left: 1vw; padding: 1vh; height: 80vh; background: linear-gradient(270deg, #7BCDF2 0%, rgba(255, 255, 255, 0.9) 100%); font-size: 1.2rem; font-family: Roboto;">
            <p style="color: #1194A9;"><span style="color: #008095;font-size: 1.5rem;">Greetings from Givewell,</span><br><br> Enter the OTP mentioned below in the verify box to register successfully.</p>
            <h2 style="color: #008095;">${otp}</h2>
            <h1 style="color: #008095; position: relative; bottom: 30vh; top: 50vh;"><center>Givewell</center></h1>
        </div>
            `
        }

        transporter.sendMail(email_conf,(err,info)=>{ 
                if(err)
                {
                    console.log("Error has been occured..!!");
                    return reject({message:`an error has been occured..!!`});
                }
                return resolve({message:`email has been sent successfully..!!`});
        })
    }) 
} 
 
module.exports = sendEmail;