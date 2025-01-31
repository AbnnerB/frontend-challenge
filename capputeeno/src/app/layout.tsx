import Header from "@/components/header";
import "./globals.css";
import { Saira } from "next/font/google";
import DefaultProvider from "@/components/defaultProvider";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Challenge Caputteno",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <DefaultProvider>
          <Header />
          {children}
        </DefaultProvider>
      </body>
    </html>
  );
}
