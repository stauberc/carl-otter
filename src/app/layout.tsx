import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Carl-Otter Webportfolio",
  description: "Carl-Otters professionelles Webentwickler-Portfolio mit modernen Webanwendungen und digitalen Erlebnissen",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={pacifico.variable}>
      <body className={inter.className}>
        <div className="min-h-screen bg-[#030303] flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
