import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Macronutrients Foods | Superfoods Online | Healthy Gluten Free Foods",
  description:
    "Get Sorted - Grain Free, Gluten Free, Guilt Free. Buy Plant Based Grainfree Food Products online with No Maida, No Soy, No Refined Sugar and No Preservatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
