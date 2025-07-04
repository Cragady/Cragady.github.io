import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundDancer from './components/BackgroundDancer/BackgroundDancer';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// import './bootstrap-4.1.0.min.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craig Wright",
  description: "A portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/*<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />*/}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <BackgroundDancer />


        <section id="app-cont">

          <Nav />


          <main>
            {children}
          </main>


          <Footer />

        </section>

      </body>
    </html>
  );
}
