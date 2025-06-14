import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/homepage/navigation/page";
import NutritionPage from "@/components/homepage/nutrition-ui/nutrition-ui";
import Footer from "@/components/homepage/footer/footer";

const font =Poppins({
  weight: ['100',"200","300","400","500","600","700","800","900"],
  subsets:["latin"]
})



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
          <section className='md:px-12 px-6'>
          <Navigation/>
      </section>
        {children}
            <section className='mt-10'>
                <NutritionPage/>
               </section>
               <section className='bg-light-gray'>
                <Footer/>
               </section>
      </body>
    </html>
  );
}
