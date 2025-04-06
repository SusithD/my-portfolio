import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle GET request (for testing)
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Contact API is working' });
    return;
  }

  // Handle POST request
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create a transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Create email content
      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #fff; font-size: 24px; margin-bottom: 10px; background: linear-gradient(to right, #fff, rgba(255,255,255,0.7)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">New Contact Form Submission</h1>
            <div style="width: 100px; height: 4px; background: linear-gradient(to right, #6366f1, transparent); border-radius: 2px; margin: 0 auto;"></div>
          </div>
          
          <div style="background-color: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0 0 15px 0; color: rgba(255,255,255,0.7);">You have received a new message from your portfolio contact form:</p>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.5); font-size: 14px;">Name</p>
              <p style="margin: 0; color: #fff; font-weight: 500;">${name}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.5); font-size: 14px;">Email</p>
              <p style="margin: 0; color: #fff; font-weight: 500;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.5); font-size: 14px;">Subject</p>
              <p style="margin: 0; color: #fff; font-weight: 500;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; color: rgba(255,255,255,0.5); font-size: 14px;">Message</p>
              <p style="margin: 0; color: #fff; font-weight: 500; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 0;">This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `;

      // Create confirmation email content
      const confirmationEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #fff; font-size: 24px; margin-bottom: 10px; background: linear-gradient(to right, #fff, rgba(255,255,255,0.7)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Thank You for Reaching Out</h1>
            <div style="width: 100px; height: 4px; background: linear-gradient(to right, #6366f1, transparent); border-radius: 2px; margin: 0 auto;"></div>
          </div>
          
          <div style="background-color: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.05);">
            <p style="margin: 0 0 15px 0; color: rgba(255,255,255,0.7);">Dear ${name},</p>
            
            <p style="margin: 0 0 15px 0; color: rgba(255,255,255,0.7);">Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: rgba(99, 102, 241, 0.1); padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 3px solid #6366f1;">
              <p style="margin: 0 0 10px 0; color: rgba(255,255,255,0.5); font-size: 14px; font-style: italic;">Your Message:</p>
              <p style="margin: 0; color: #fff; font-weight: 500; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="margin: 0 0 15px 0; color: rgba(255,255,255,0.7);">In the meantime, feel free to explore more of my work or connect with me on social media:</p>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin: 20px 0;">
              <a href="https://github.com/SusithD" style="color: #6366f1; text-decoration: none; font-weight: 500;">GitHub</a>
              <a href="https://www.linkedin.com/in/susith-deshan-alwis" style="color: #6366f1; text-decoration: none; font-weight: 500;">LinkedIn</a>
              <a href="https://www.behance.net/susithalwis" style="color: #6366f1; text-decoration: none; font-weight: 500;">Behance</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);">
            <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 0;">This is an automated response. Please do not reply to this email.</p>
            <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 5px 0 0 0;">© ${new Date().getFullYear()} Susith Deshan Alwis. All rights reserved.</p>
          </div>
        </div>
      `;

      // Email to portfolio owner
      const ownerMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        html: emailContent
      };

      // Confirmation email to the user
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting me - Susith Deshan Alwis',
        html: confirmationEmailContent
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(ownerMailOptions),
        transporter.sendMail(userMailOptions)
      ]);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 