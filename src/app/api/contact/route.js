import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Add OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// Add GET handler for testing
export async function GET() {
  return NextResponse.json({ message: 'API is working' }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400, headers }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email to portfolio owner
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    };

    // Confirmation email to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me - Susith Deshan Alwis',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,0.1); padding: 30px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #2d3748; font-size: 28px; margin-bottom: 10px;">✨ Thank You for Reaching Out! ✨</h2>
            <div style="width: 50px; height: 3px; background: linear-gradient(90deg, #3182ce, #63b3ed); margin: 0 auto;"></div>
          </div>
          
          <p style="color: #2d3748; font-size: 16px;">Dear ${name},</p>
          
          <p style="color: #4a5568; line-height: 1.6;">I'm truly excited that you've taken the time to connect with me through my portfolio website! Your interest means a lot, and I want you to know that your message has been successfully received.</p>
          
          <div style="background: linear-gradient(145deg, #f7fafc, #edf2f7); padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">📝 Your Message Details:</h3>
            <p style="color: #4a5568; margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
            <p style="color: #4a5568; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin: 25px 0;">
            <h3 style="color: #2d3748; margin-bottom: 15px;">⏱️ What to Expect:</h3>
            <ul style="color: #4a5568; line-height: 1.6;">
              <li>I typically respond within 24-48 hours</li>
              <li>For urgent matters, you can reach me on LinkedIn</li>
              <li>I'm always open to meaningful collaborations and discussions</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #4a5568;">Warm regards,</p>
            <p style="color: #2d3748; font-weight: bold; margin: 5px 0;">Susith Deshan Alwis</p>
            <p style="color: #718096; font-size: 14px;">Full Stack Developer</p>
            <p style="color: #718096; font-size: 14px;">📧 iamsusithalwis@gmail.com</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500, headers }
    );
  }
} 