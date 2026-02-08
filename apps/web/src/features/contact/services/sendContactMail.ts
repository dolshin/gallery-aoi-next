import type { ContactFormInput } from '../schema';

export async function sendContactMail(data: ContactFormInput) {
  const MAILGUN_API_URL = `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`;
  const Headers = {
    Authorization:
      'Basic ' +
      Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64'),
  };
  const Body = new URLSearchParams({
    from: process.env.MAILGUN_FROM as string,
    to: process.env.MAILGUN_TO as string,
    subject: `【お問い合わせ】${data.subject}`,
    text: `
お名前: ${data.name}
フリガナ: ${data.phoneticName}
メール: ${data.emailAddress}
電話番号: ${data.phoneNumber || '未入力'}
メッセージ:${data.message}
`,
  });
  const response = await fetch(MAILGUN_API_URL, {
    method: 'POST',
    headers: Headers,
    body: Body,
  });

  if (!response.ok) {
    throw new Error('Mailgun API failed');
  }
}
