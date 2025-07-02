
import emailjs from '@emailjs/browser';

export async function sendNewsletterEmail(email: string): Promise<void> {
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    { from_name: email }, // 👈 must match your EmailJS template
    {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    }
  );
}
