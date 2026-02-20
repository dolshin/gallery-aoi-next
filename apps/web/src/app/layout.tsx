import 'sanitize.css';
import '@/styles/global.css';
import '@dolshin/ui/index.css';
import '@fontsource-variable/montserrat';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
