import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akash R A — Cybersecurity Professional & Creative',
  description:
    'Portfolio of Akash R A — Multidisciplinary professional working across software development, cybersecurity, programming instruction, operational coordination, and digital media.',
  keywords: [
    'Akash R A',
    'Cybersecurity',
    'Penetration Testing',
    'Portfolio',
    'Chronicles of Lumina',
    'Creative Writing',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
