const nodemailer = require('nodemailer');

function main(){

    const transporter = nodemailer.createTransport( {
        host: "email-ssl.com.br",
        port: 465,
        secure: true,
        auth: {
            user: "emerson@superfestval.com.br",
            pass: "---"
        }
    })

    let info = transporter.sendMail({
        from: "emerson@superfestval.com.br",
        to: "emerson.u.g@gmail.com",
        subject: "Email enviado usando Nodejs",
        text: "Opa!, que bom que recebeu essa mensagem",
        html: "<h1>Opa! que bom que você esta vendo isso</h1>"
    }, (err, info)=>{
        if(err) throw err;
        console.log(info)
    })

    console.log("Message sent: %s");
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


}

main();
