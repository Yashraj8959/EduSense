import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduSense",
  description: "A career growth app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head />
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            {/* main content */}
            <main className="min-h-screen">
            {children}
            </main>
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
              <p>&copy; 2022 EduSense</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
    </html>
  );
}
