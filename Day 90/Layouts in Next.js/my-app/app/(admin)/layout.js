import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Facebook - Connet with friends and the world around you on Facebook",
  description: "Admin Page: Facebook is a social media platform that connects people.",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
  );
}
