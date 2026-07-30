import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  try {
    const { name, email, contactNumber, message } = await req.json();

    // Validate input
    if (!name || !email || !contactNumber || !message) {
      return NextResponse.json({ message: "All required fields must be provided" }, { status: 400 });
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
      to: "dharm.s.dev@gmail.com", // Change to your receiving email address
      subject: "New Contact Form Submission",
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nMessage: ${message}`,
      html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #333; box-shadow: 0 0 40px rgba(250, 204, 21, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, rgba(250, 204, 21, 0.15) 0%, transparent 100%); padding: 30px 20px; text-align: center; border-bottom: 1px solid #222;"> 
          <h2 style="margin: 0; color: #facc15; font-size: 24px; letter-spacing: -0.5px;">New Project Inquiry</h2> 
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">You have received a new message from your portfolio.</p>
        </div> 
        
        <!-- Content -->
        <div style="padding: 30px 20px;"> 
          
          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 5px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #ffffff;">${name}</p>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 5px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="margin: 0; font-size: 16px;">
              <a href="mailto:${email}" style="color: #facc15; text-decoration: none; font-weight: 500;">${email}</a>
            </p>
          </div>

          <div style="margin-bottom: 25px;">
            <p style="margin: 0 0 5px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contact Number</p>
            <p style="margin: 0; font-size: 16px; font-weight: 500; color: #ffffff;">${contactNumber}</p>
          </div>

          <div style="margin-bottom: 10px;">
            <p style="margin: 0 0 10px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <div style="background-color: rgba(255,255,255,0.03); border-left: 3px solid #facc15; padding: 15px 20px; border-radius: 0 8px 8px 0; color: #e2e8f0; line-height: 1.6; font-size: 15px;">
              ${message.replace(/\\n/g, '<br>')}
            </div> 
          </div>

        </div> 
        
        <!-- Footer -->
        <div style="background-color: rgba(255,255,255,0.02); padding: 20px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid #222;"> 
          This email was sent securely from <a href="https://iamdharm.me" style="color: #facc15; text-decoration: none;">iamdharm.me</a>. 
        </div>
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
