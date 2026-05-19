import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motion.Builder - AI-Powered Animation Builder",
  description: "Build stunning animations with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0a0a0a', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
