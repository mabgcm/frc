import Navbar from "@/components/Navbar";
import "../styles/global.css"; // Single global CSS import

export const metadata = {
  title: "Frequency Coin",
  description: "Tokenize your dreams and intentions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
