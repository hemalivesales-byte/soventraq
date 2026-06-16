import type { VercelRequest, VercelResponse } from '@vercel/node';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const TO_EMAIL = 'sonevtraq@gmail.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, service, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error('SENDGRID_API_KEY is not set');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const fromEmail = process.env.EMAIL_FROM ?? 'noreply@soventraq.com';
  const replyTo = email?.trim() || process.env.EMAIL_REPLY_TO || fromEmail;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1a1a1a;">
      <h2 style="color: #00c0cc; border-bottom: 2px solid #00c0cc; padding-bottom: 8px;">
        New Soventraq Website Contact Request
      </h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
        <tr><td style="padding: 8px 0; color: #555; width: 130px;"><strong>Name</strong></td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #555;"><strong>Email</strong></td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
        ${phone ? `<tr><td style="padding: 8px 0; color: #555;"><strong>Phone</strong></td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>` : ''}
        ${company ? `<tr><td style="padding: 8px 0; color: #555;"><strong>Company</strong></td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>` : ''}
        ${service ? `<tr><td style="padding: 8px 0; color: #555;"><strong>Service</strong></td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>` : ''}
      </table>
      <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 6px; border-left: 4px solid #00c0cc;">
        <strong style="color: #555;">Message:</strong>
        <p style="white-space: pre-line; margin: 8px 0 0;">${escapeHtml(message)}</p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        Sent via soventraq.com contact form
      </p>
    </div>
  `;

  const payload = {
    personalizations: [{ to: [{ email: TO_EMAIL }] }],
    from: { email: fromEmail, name: 'Soventraq Website' },
    reply_to: { email: replyTo },
    subject: 'New Soventraq Website Contact Request',
    content: [{ type: 'text/html', value: htmlBody }],
  };

  try {
    const sgRes = await fetch(SENDGRID_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!sgRes.ok) {
      const errBody = await sgRes.text();
      console.error('SendGrid error', sgRes.status, errBody);
      return res.status(502).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid fetch error', err);
    return res.status(500).json({ error: 'Unexpected error. Please try again.' });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
