import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

export const metadata: Metadata = {
  title: "Ravy",
  description: "Share your ideas and accomplishments with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
