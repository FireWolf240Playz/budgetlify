import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import Navigation from "./_components/Navigation";

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Budgetify",
  description: "Your personal all-in-one budget app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-grow relative">
            <Navigation />
            <main className="flex-grow p-4">
              <div className="pl-[33%]">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
