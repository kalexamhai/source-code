import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css'; ;

const inter = Inter({ subsets: [ 'latin' ] });

export const metadata: Metadata = {
  title: 'Kal Exam Hai!',
  description: 'Kal Exam Hai is developed for B.Tech students to get previous year question papers'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
