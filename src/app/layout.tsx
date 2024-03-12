import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import Favicon from './favicon.png';

export const metadata: Metadata = {
  // icons: {
  //   icon: '/favicon.png',
  // },
  icons: [{ rel: 'icon', url: Favicon.src }],
  title: "SURYA.DEV",
  description: "Currently focused on Frontend Developer, but exposed in all aspects of web development including frontend and backend, penetration testing, and devops engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
