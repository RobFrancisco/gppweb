import Navbar from "./Navbar"
import Hero from "./Hero"
import Content from "./Content"
import Blog from "./Blog"
import Contact from "./Contact"

import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Blog />
      <Contact />
      
    </div>
    
  );
}
