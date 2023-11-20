import "@fontsource/poppins";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AppTheme from "./Theme/AppTheme";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kosmic.ai Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppTheme>
        <body className={poppins.className}>{children}</body>
      </AppTheme>
    </html>
  );
}
