import './globals.css';
import { Providers } from '@/providers';

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className="bg-black">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
