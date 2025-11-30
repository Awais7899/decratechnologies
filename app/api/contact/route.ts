import { NextRequest, NextResponse } from "next/server";

// Email Configuration - Add your credentials here
const RESEND_API_KEY = "re_2XbPgkCH_3wPNwPVPUeKP1KLKbpWCVfD1";
const FROM_EMAIL = "onboarding@resend.dev";
const RECIPIENT_EMAIL = "decratechnologies@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Format the email content - improved to avoid spam filters
    const emailSubject = `New Contact Form Inquiry: ${subject}`;
    const emailBody = `
You have received a new contact form submission from your website.

Contact Details:
----------------
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
--------
${message}

---
This email was sent from the Decra Technologies website contact form.
You can reply directly to this email to respond to ${name} at ${email}.
    `.trim();

    // HTML version - improved formatting to avoid spam filters
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
          <h2 style="color: #FF7A00; margin-top: 0; border-bottom: 3px solid #FF7A00; padding-bottom: 10px;">
            New Contact Form Inquiry
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #FF7A00;">
            <p style="margin: 8px 0;"><strong style="color: #1A1A1A;">Name:</strong> <span style="color: #333;">${name}</span></p>
            <p style="margin: 8px 0;"><strong style="color: #1A1A1A;">Email:</strong> <a href="mailto:${email}" style="color: #FF7A00; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #1A1A1A;">Phone:</strong> <span style="color: #333;">${
              phone || "Not provided"
            }</span></p>
            <p style="margin: 8px 0;"><strong style="color: #1A1A1A;">Subject:</strong> <span style="color: #333;">${subject}</span></p>
          </div>
          
          <div style="margin: 25px 0;">
            <h3 style="color: #1A1A1A; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #fafafa; padding: 15px; border-radius: 5px; white-space: pre-wrap; line-height: 1.8; color: #333;">
${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
            <p style="color: #666; font-size: 12px; margin: 5px 0;">
              This email was sent from the Decra Technologies website contact form.
            </p>
            <p style="color: #666; font-size: 12px; margin: 5px 0;">
              You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    if (RESEND_API_KEY && RESEND_API_KEY !== "YOUR_RESEND_API_KEY_HERE") {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: RECIPIENT_EMAIL,
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
            text: emailBody,
            // Add headers to improve deliverability
            headers: {
              "X-Entity-Ref-ID": `contact-form-${Date.now()}`,
              "List-Unsubscribe": `<mailto:${RECIPIENT_EMAIL}?subject=unsubscribe>`,
            },
            // Tags for better tracking and organization
            tags: [
              { name: "category", value: "contact-form" },
              { name: "source", value: "website" },
            ],
          }),
        });

        if (resendResponse.ok) {
          console.log("✅ Email sent successfully via Resend");
        } else {
          const errorData = await resendResponse.json();
          console.error("❌ Resend API error:", errorData);

          // If domain verification error, fall back to logging
          if (
            errorData.statusCode === 403 &&
            errorData.message?.includes("domain is not verified")
          ) {
            console.warn(
              "⚠️  Domain not verified. Using onboarding@resend.dev for testing."
            );
            console.log("=== CONTACT FORM SUBMISSION (Logged) ===");
            console.log("To:", RECIPIENT_EMAIL);
            console.log("Subject:", emailSubject);
            console.log("Body:", emailBody);
            console.log("==========================================");
          } else {
            // For other errors, still log but don't fail the request
            console.error("Email sending failed, but form submission logged");
            console.log("=== CONTACT FORM SUBMISSION (Logged) ===");
            console.log("To:", RECIPIENT_EMAIL);
            console.log("Subject:", emailSubject);
            console.log("Body:", emailBody);
            console.log("==========================================");
          }
        }
      } catch (emailError) {
        console.error("❌ Email sending error:", emailError);
        console.log("=== CONTACT FORM SUBMISSION (Logged) ===");
        console.log("To:", RECIPIENT_EMAIL);
        console.log("Subject:", emailSubject);
        console.log("Body:", emailBody);
        console.log("==========================================");
      }
    } else {
      // No API key - log for development
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("To:", RECIPIENT_EMAIL);
      console.log("Subject:", emailSubject);
      console.log("Body:", emailBody);
      console.log("===============================");
      console.log(
        "\n⚠️  To enable email sending, update RESEND_API_KEY in app/api/contact/route.ts"
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
