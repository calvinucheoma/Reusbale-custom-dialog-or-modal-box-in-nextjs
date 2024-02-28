import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modal/Dialog Box In Nextjs',
  description: 'Creating a reusable modal/dialog box using nextjs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col gap-6 justify-center items-center py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
