import "./globals.css";
import { NavBar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <div className="px-12">{children}</div>
      </body>
    </html>
  );
}
