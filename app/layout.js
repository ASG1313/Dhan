import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Dhan",
  description: "Track Your Money",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-pink-100 py-12">
            <br/>
            <div className="container mx-auto px-4 text-center text-gray-800">
              <p>Developed by Anushka Ghushe</p>
            </div>
            <br/>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
