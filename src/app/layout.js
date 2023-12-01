import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dev Scroll - Home",
    description: "A simple and professional blog application.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="container">
                    <div className="wrapper">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
