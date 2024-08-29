import { Inter } from "next/font/google";
import "../styles/globals.css";
import '../styles/css/style.css'
import '../styles/css/plugins/fontawesome-5.css'
import '../styles/css/vendor/bootstrap.min.css'
import '../styles/css/vendor/fonts.css'
import '../styles/css/vendor/magnific-popup.css'
import '../styles/css/vendor/metismenu.css'
import '../styles/css/vendor/swiper.css'
import Navbar from "@/Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";
import Scripts from "@/Components/layout/Scripts";
import SessionWrapper from "@/Components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Techfacts Central'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <Navbar />
          <main className={inter.className}>{children}</main>
          <Footer />
          <Scripts />
        </SessionWrapper>
      </body>
      
    </html>
  );
}
