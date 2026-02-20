export const CONTACT_CONFIRM_COOKIE = 'contact_confirm';

export const CONTACT_CONFIRM_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  maxAge: 60 * 10, // 10分
  path: '/',
};
