import NavbarFloat from "../components/NavbarFloat/NavbarFloat.js"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfólio | Álvaro Sales",
  description: "Portfólio pessoal de um dev frontend",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavbarFloat />
        {children}
      </body>
    </html>
  )
}
