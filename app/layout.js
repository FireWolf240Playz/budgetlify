import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Budgetify",
  description: "Your personal all-in-one budget app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <Sidebar />

          {children}
        </main>
      </body>
    </html>
  );
}
