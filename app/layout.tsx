import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Usama Iftikhar | Machine Learning Engineer',
  description: 'Machine Learning professional specializing in Generative AI, Computer Vision, and Natural Language Processing. Experienced in PyTorch, TensorFlow, and deep learning models.',
  keywords: ['Machine Learning Engineer', 'Deep Learning', 'Computer Vision', 'Natural Language Processing', 'PyTorch', 'TensorFlow', 'Generative AI'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}