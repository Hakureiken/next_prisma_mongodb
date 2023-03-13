
export default function handler(req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port:465,
        host:"smtp.gmail.com",
        auth: {
        user:'starlightweb10@gmail.com',
        pass:process.env.PASSWORD_MAIL_PRO
        },
        secure:true
    })
    console.log('après const transporter');
    const mailData = {
        from: 'starlightweb10@gmail.com',
        to: req.body.email,
        subject: `Message From ${req.body.email}`,
        text: req.body.email,
        html: `<div> ${process.env.PASSWORD_MAIL_PRO}</div>`

    }
    console.log('mail to : ' + mailData);

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
        console.log('les erreurs : '+err);
        } else {
        console.log('les infos : '+info);
        }
    })
    // console.log(req.body);
    res.status(200).json({a:req.body.login_email})
}
