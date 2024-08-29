import { render } from "@react-email/render";

import NotionMagicLinkEmail from "../../../../emails";

import { Resend } from "resend";

// creating a new resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
    try {
        // getting the user email
        const { email } = await req.json();
        
        // sending the email
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: 'test email',
        react: NotionMagicLinkEmail(),
      });
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
      
    //   returning the success message
      return "Verification Email Sent Successfully!!";
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }