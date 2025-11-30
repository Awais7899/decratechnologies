# Email Setup Instructions

The contact form is now configured to send emails directly to `decratechnologies@gmail.com`.

## Setup Options

### Option 1: Using Resend (Recommended)

1. **Sign up for Resend** (free tier available):

   - Go to https://resend.com
   - Create an account and verify your email

2. **Get your API Key**:

   - Navigate to API Keys in your Resend dashboard
   - Create a new API key
   - Copy the key

3. **Add to Environment Variables**:

   - Create a `.env.local` file in the root of your project
   - Add the following:
     ```
     RESEND_API_KEY=re_your_api_key_here
     FROM_EMAIL=contact@yourdomain.com
     ```
   - Replace `contact@yourdomain.com` with a verified domain email in Resend

4. **Verify Your Domain** (for production):
   - In Resend dashboard, add and verify your domain
   - Update `FROM_EMAIL` to use your verified domain

### Option 2: Using Other Email Services

You can modify `app/api/contact/route.ts` to use other services like:

- **SendGrid**: https://sendgrid.com
- **Nodemailer**: For SMTP (Gmail, Outlook, etc.)
- **AWS SES**: Amazon Simple Email Service

### Current Behavior

- **Without API Key**: The form will log submissions to the console (development mode)
- **With API Key**: The form will send actual emails to `decratechnologies@gmail.com`

## Testing

1. Fill out the contact form
2. Submit the form
3. Check your email inbox at `decratechnologies@gmail.com`
4. The sender's email will be set as the reply-to address

## Troubleshooting

- Make sure your `.env.local` file is in the root directory
- Restart your development server after adding environment variables
- Check the server console for any error messages
- Verify your Resend API key is correct
- Ensure your FROM_EMAIL domain is verified in Resend
