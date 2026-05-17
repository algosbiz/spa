import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const { form_name, form_email, form_subject, form_phone, form_message, form_botcheck, turnstile_token } = req.body;

    // Honeypot bot check — if this hidden field has a value, it's a bot
    if (form_botcheck) {
        return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    }

    // Turnstile verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
    if (!turnstile_token) {
        return res.status(400).json({ success: false, message: 'Please complete the captcha.' });
    }

    try {
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(turnstile_token)}`,
        });

        const verifyData = await verifyRes.json();
        
        if (!verifyData.success) {
            return res.status(400).json({ success: false, message: 'Captcha verification failed. Please try again.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Captcha service unavailable. Please try again later.' });
    }

    // Validate required fields
    if (!form_name || !form_email || !form_subject || !form_message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form_email)) {
        return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    const businessName = process.env.BUSINESS_NAME || 'Spa Bali Moon';
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    try {
        // ============================================
        // 1. Email Notification to Owner
        // ============================================
        const ownerEmail = {
            to: toEmail,
            from: { email: fromEmail, name: businessName },
            replyTo: { email: form_email, name: form_name },
            subject: `[Contact Form] ${form_subject}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0ebe1;">
                    <div style="background-color: #b8952e; padding: 30px 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 500; letter-spacing: 1px;">New Contact Message</h1>
                        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px; letter-spacing: 0.5px;">${businessName} — Contact Form</p>
                    </div>
                    <div style="padding: 30px;">
                        <div style="background-color: #ffffff; border-radius: 12px; padding: 25px; border: 1px solid #e5ddd0;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #ece6da; color: #8b7d6b; font-weight: 600; width: 100px; vertical-align: top; font-size: 14px;">Name</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #ece6da; color: #3d3428; font-size: 14px;">${form_name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #ece6da; color: #8b7d6b; font-weight: 600; vertical-align: top; font-size: 14px;">Email</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #ece6da; font-size: 14px;"><a href="mailto:${form_email}" style="color: #b8952e; text-decoration: none;">${form_email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #ece6da; color: #8b7d6b; font-weight: 600; vertical-align: top; font-size: 14px;">Phone</td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #ece6da; color: #3d3428; font-size: 14px;">${form_phone || 'Not provided'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; color: #8b7d6b; font-weight: 600; vertical-align: top; font-size: 14px;">Subject</td>
                                    <td style="padding: 12px 0; color: #3d3428; font-size: 14px;">${form_subject}</td>
                                </tr>
                            </table>
                        </div>
                        <div style="margin-top: 20px; background-color: #ffffff; border-radius: 12px; padding: 25px; border: 1px solid #e5ddd0;">
                            <h3 style="margin: 0 0 12px; color: #b8952e; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Message</h3>
                            <p style="margin: 0; color: #3d3428; line-height: 1.7; white-space: pre-wrap; font-size: 14px;">${form_message}</p>
                        </div>
                    </div>
                    <div style="padding: 18px 30px; text-align: center; border-top: 1px solid #e5ddd0;">
                        <p style="margin: 0; color: #a89a88; font-size: 11px;">${businessName}</p>
                    </div>
                </div>
            `,
        };

        // ============================================
        // 2. Confirmation Email to Customer
        // ============================================
        const customerEmail = {
            to: form_email,
            from: { email: fromEmail, name: businessName },
            subject: `Thank you for contacting ${businessName}`,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0ebe1;">
                    <div style="background-color: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 3px solid #b8952e;">
                        <img src="https://spabalimoon.com/images/logo/sbm.webp" alt="${businessName}" style="max-height: 80px; width: auto; margin-bottom: 15px;" />
                        <p style="color: #b8952e; margin: 0; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Relax &bull; Rejuvenate &bull; Restore</p>
                    </div>
                    <div style="padding: 35px 30px;">
                        <div style="background-color: #ffffff; border-radius: 12px; padding: 30px; border: 1px solid #e5ddd0;">
                            <h2 style="color: #3d3428; margin: 0 0 15px; font-size: 20px; font-weight: 500;">Dear ${form_name},</h2>
                            <p style="color: #6b5e4e; line-height: 1.8; margin: 0 0 20px; font-size: 14px;">
                                Thank you for reaching out to <strong>${businessName}</strong>. We have received your message and our team will get back to you as soon as possible.
                            </p>
                            
                            <div style="padding: 18px; background-color: #f8f4ee; border-radius: 8px; margin: 20px 0; border: 1px solid #ece6da;">
                                <h3 style="margin: 0 0 10px; color: #b8952e; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Your Message Summary</h3>
                                <p style="margin: 0 0 5px; color: #8b7d6b; font-size: 13px;"><strong>Subject:</strong> ${form_subject}</p>
                                <p style="margin: 0; color: #6b5e4e; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${form_message}</p>
                            </div>

                            <p style="color: #6b5e4e; line-height: 1.8; margin: 20px 0 0; font-size: 14px;">
                                We typically respond within 24 hours. In the meantime, feel free to explore our spa treatments and services.
                            </p>

                            <div style="text-align: center; margin-top: 28px;">
                                <a href="https://spabalimoon.com" style="display: inline-block; background-color: #b8952e; color: #ffffff; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 13px; letter-spacing: 0.5px;">Visit Our Website</a>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 30px; text-align: center; border-top: 1px solid #e5ddd0;">
                        <h3 style="color: #3d3428; margin: 0 0 12px; font-size: 15px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Contact Info</h3>
                        <p style="margin: 0 0 5px; color: #6b5e4e; font-size: 13px;">Jl. Panggung Sari No. 30, Seminyak, Bali</p>
                        <p style="margin: 0 0 5px; color: #6b5e4e; font-size: 13px;">+62 878-6317-5144</p>
                        <p style="margin: 0 0 20px; font-size: 13px;"><a href="mailto:info@spabalimoon.com" style="color: #b8952e; text-decoration: none;">info@spabalimoon.com</a></p>
                        
                        <div style="margin-bottom: 20px;">
                            <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold;">X</a>
                            <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold; font-family: serif;">f</a>
                            <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold;">in</a>
                            <a href="#" style="display: inline-block; width: 28px; height: 28px; border: 1px solid #d5ccbe; border-radius: 50%; color: #8b7d6b; text-align: center; line-height: 26px; font-size: 12px; text-decoration: none; margin: 0 5px; font-weight: bold;">ig</a>
                        </div>

                        <p style="margin: 0; color: #a89a88; font-size: 11px;">This is an automated confirmation. Please do not reply to this email.</p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await sgMail.send(ownerEmail);
        await sgMail.send(customerEmail);

        return res.status(200).json({ success: true, message: 'Message sent successfully! Please check your email for confirmation.' });

    } catch (error) {
        console.error('SendGrid Error:', error);

        if (error.response) {
            console.error('SendGrid Response Body:', error.response.body);
        }

        return res.status(500).json({ 
            success: false, 
            message: 'Sorry, there was an error sending your message. Please try again later.' 
        });
    }
}
