import Navbar from "@/components/Navbar";
import "../styles/global.css"; // Single global CSS import
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequency Coin",
  description: "Tokenize your dreams and intentions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
