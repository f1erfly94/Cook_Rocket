import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: "--font-nunito",
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Cooking",
    description: "Everything is delicious",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={nunito.className} lang="en">
        <body>
        <main className={"min-h-screen"}>
            <Header/>
            {children}
        </main>
        <Footer/>

        </body>
        </html>
    );
}
