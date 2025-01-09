'use server'

import { MailDataState } from "@/types";
import { Resend } from "resend"
import { z } from 'zod' 

export async function sendMailAction(prevState: MailDataState, formData: FormData) {
  //console.log('Email:', formData.get('email'))
  //console.log('Message:', formData.get('message'))
  
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

  try {
    // Validate the data using the schema
    const data = schema.parse({
      email: formData.get('email'), 
      message: formData.get('message')
    });

    const emailPayload = {
      from: `My Website <info@scriptingpixels.com>`, 
      to: process.env.SMTP_EMAIL as string, 
      subject: "Message from My Website: " + data.email,
      text: `Email: ${data.email}\nMessage:\n${data.message}`, // Plain text message
      //react: '',
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