import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundDancer from './components/BackgroundDancer/BackgroundDancer';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import './bootstrap-4.1.0.min.css';
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


        <section id="app-cont">
          <div id="wrap">

            <div id="main" className="App">
              <BackgroundDancer />


              <Nav />
              {children}


            </div>
          </div>

          <Footer />
        </section>



        <script defer src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossOrigin="anonymous"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
          integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossOrigin="anonymous"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
          integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
