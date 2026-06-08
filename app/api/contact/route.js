import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "opdsbanasya@gmail.com", // Change to your receiving email address
      subject: "New Contact Form Submission",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
      <div style="background: #2563eb; color: #ffffff; padding: 20px; text-align: center;"> 
        <h2 style="margin: 0;">📩 New Contact Form Submission</h2> 
      </div> 
      
      <div style="padding: 25px;"> 
        <table style="width: 100%; border-collapse: collapse;"> 
          <tr> 
            <td style="padding: 12px 0; font-weight: bold; width: 120px;">Name</td> 
            <td style="padding: 12px 0;">${name}</td> 
          </tr> 
          <tr> 
            <td style="padding: 12px 0; font-weight: bold;">Email</td> 
            <td style="padding: 12px 0;"> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;"> ${email} </a> </td> 
          </tr> 
          <tr> 
            <td style="padding: 12px 0; font-weight: bold; vertical-align: top;">Message</td> 
            <td style="padding: 12px 0;"> 
              <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 15px; border-radius: 6px;"> ${message} </div> 
            </td> 
          </tr> 
        </table> 
        </div> 
        <div style="background: #f8fafc; padding: 15px; text-align: center; color: #64748b; font-size: 12px;"> 
          This email was sent from your <a href="https://dharm-portfolio.vercel.app/" style="color: #2563eb; text-decoration: none;"> Portfolio </a> contact form. 
        </div>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
