import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduSense",
  description: "A career growth app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
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
