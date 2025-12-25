"use server"
import { Resend } from "resend"

export const sendEmail = async (prevState, formData) => {
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!fullname || !email || !subject || !message) {
        return {
            success: false,
            message: "All fields are required!"
        }
    }

    try {
        let resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: ["murdzhevpetar@gmail.com"],
            subject: subject,
            replyTo: email,
            text:
                `Name: ${fullname}
                 Email: ${email}
         
                 Message:
                 ${message}
         `,
        })

        return {
            success: true,
            message: "Email sent successfully!"
        }
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: "Error sending email!"
        }

    }


}