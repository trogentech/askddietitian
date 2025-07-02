import type { Metadata } from "next";
import { Poppins,Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/homepage/navigation/page";
import NutritionPage from "@/components/homepage/nutrition-ui/nutrition-ui";
import Footer from "@/components/homepage/footer/footer";

const font = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "askddietician",
  description: "Ask the dietician web app Product made with nextjs and tailwind v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
          <section className='md:px-12 px-6 '>
          <Navigation/>
      </section>
        {children}
            <section className=''>
                <NutritionPage/>
               </section>
               <section className=''>
                <Footer/>
               </section>
      </body>
    </html>
  );
}
