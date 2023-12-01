import { Archivo } from "next/font/google";
import "./globals.css";
import SideNav from "./components/side-nav";
import Footer from "./components/footer";
const arc = Archivo({ subsets: ["latin"] });

export const metadata = {
    title: "Pandemic Coin",
    description: "Pandemic Coin",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${arc.className} flex h-screen`}>
                <section className="md:w-16">
                    <SideNav />
                </section>
                <section className="relative w-full">
                    {children}
                    <Footer />
                </section>
            </body>
        </html>
    );
}
