const nodemailer=require('nodemailer');
class MailService{
    constructor(){
        this.transporter=nodemailer.createTransport({
            host:smtp.gmail.com,
            port:587,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASS
            }
        })
    }

    async sendMail(email,link){
       await this.transporter.sendMail({
        from:process.env.SMTP_USER,
        to:email,
        subject:"Forgot Password",
        html:`
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
                    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h2 style="text-align: center; color: #333;">Password Reset Request</h2>
                        <p style="color: #555;">We received a request to reset your password. Click the button below to create a new password:</p>
                        <div style="text-align: center; margin: 30px 0;">
                            <a href="${link}" style="display: inline-block; padding: 12px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
                        </div>
                        <p style="color: #777; font-size: 14px;">If you didn’t request a password reset, you can safely ignore this email.</p>
                        <p style="color: #999; font-size: 12px; text-align: center; margin-top: 40px;">&copy; ${new Date().getFullYear()} MyApp. All rights reserved.</p>
                    </div>
                </div>
        `
       })
    }

}
module.exports=new MailService();