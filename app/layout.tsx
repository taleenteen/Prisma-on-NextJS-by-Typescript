import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from './components/auth/SessionProvider'
import { getSession } from "next-auth/react";
import NavBar from "./components/Navbar";

interface CustomUser {
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string | null
}

interface CustomSession {
  user?: CustomUser
}


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch the session data
  const session = await getSession();
  

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Provide session data to SessionProvider */}
        
        <SessionProvider session={session}>

          <NavBar />
      
          {children}</SessionProvider>
      </body>
    </html>
  );
}