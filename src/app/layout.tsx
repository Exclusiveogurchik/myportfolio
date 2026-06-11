import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Mascot from "@/components/Mascot";

export const metadata: Metadata = {
  title: "Mark | Web Developer",
  description: "Делаю продающие сайты для бизнеса, которые приносят заявки.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
        <CustomCursor />
        <Mascot />
        <SmoothScroll>
          <div style={{ position: "relative", zIndex: 1 }}>
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
