const nodemailer = require('nodemailer'),
      configs = require('../configs/app'),
      hbs = require('nodemailer-express-handlebars'),
      path = require('path');

const methods = {
    sendMail(data){
        return new Promise( async (resolve, reject) => {
            try {

                const idptamplateID = configs.tamplate_id;
                const smtpConfig = {
                    service: 'gmail',
                    auth: {
                        user: configs.mail_user,
                        pass: configs.mail_pass
                    }
                };

                const transporter = nodemailer.createTransport(smtpConfig);

                const handlebarOptions = {
                    viewEngine: {
                      extName: ".handlebars",
                      partialsDir: path.resolve(__dirname, '../public/email'),
                      defaultLayout: false,
                    },
                    viewPath: path.resolve(__dirname, '../public/email'),
                    extName: ".handlebars",
                  }
                
                transporter.use('compile', hbs(handlebarOptions));

                const mailOptions = {
                    from: data.from,
                    to: data.to,
                    subject: 'Sending Email using Node.js',
                    template: data.templateID == 1 || idptamplateID == 1 ? 'template1' : 'template2' ,
                    context: {
                        message: data.message
                    }
                };
    
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        reject(error)
                    } else {
                        resolve(info.response)
                    }
                });
            } catch(error) {
                reject(error)
            }
        } )
    }
}

module.exports = { ...methods }