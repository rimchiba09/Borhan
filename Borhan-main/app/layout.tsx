import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-cairo', 
});

export const metadata: Metadata = {
  title: "Bourhan",
  description: "Medical Assistant With AI",
  icons: {
    icon: [{ url: "/assist/logo.png", sizes: "32x32" }],
  },
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
