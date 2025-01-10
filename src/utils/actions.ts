'use server'

import { MailDataState } from "@/types";
import { Resend } from "resend"
import { z } from 'zod' 
import { WelcomeEmailTemplate } from "@/templates/emails/welcome-email-template";
//import NotionMagicLinkEmail from "@/templates/emails/magic-link";

export async function sendMailAction(prevState: MailDataState, formData: FormData) {
  console.log('Email:', formData.get('email'))
  console.log('Message:', formData.get('message'))
  
  const schema = z.object({
    email: z.
      string().
      email({ message: 'Invalid email format' })
      .nonempty({ message: 'Email is required' }),
    message: z
      .string()
      .min(4, { message: 'Message should be at least 4 characters long' })
      .nonempty({ message: 'Message is required' }),
  })

  const resend = new Resend(process.env.RESEND_API_KEY);
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    // Validate the data using the schema
    const validatedFields = schema.safeParse({
      email,
      message
    });

    if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors);
      return {message: 'validation error'};
    }

    const emailPayload = {
      from: `My Website <info@scriptingpixels.com>`, 
      to: process.env.SMTP_EMAIL as string, 
      subject: "Message from My Website: " + email,
      //text: `Email: ${data.email}\nMessage:\n${data.message}`, // Plain text message
      react: WelcomeEmailTemplate({email, message}),
      //react: NotionMagicLinkEmail({loginCode : '0010101010'}),
    }

    // resend function handler for executing email sending
    const { data: resendData, error } = await resend.emails.send(emailPayload);
  
    if (error) {
      console.error("Error sending email:", error);
      return { message: 'Resend error' } 
    }

    console.log(resendData);
    
    return { message: 'Email sent' } 
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: 'Oops, an error occured. Please try again later.' } 
  }
}