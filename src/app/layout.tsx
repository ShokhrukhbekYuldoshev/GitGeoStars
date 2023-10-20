import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './_components/Footer';
import Header from './_components/Header';
const inter = Inter({ subsets: ['latin'] });

const me = {
    name: 'Shokhrukhbek Yuldoshev',
    url: 'https://github.com/ShokhrukhbekYuldoshev',
};

export const metadata: Metadata = {
    title: 'Git Geo Stars',
    description: 'A Next.js app that displays top GitHub users by location.',
    authors: [me],
    keywords: ['next.js', 'github', 'stars', 'geo', 'location', 'top', 'users'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
