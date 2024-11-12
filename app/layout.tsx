import type { Metadata } from "next";
import './global.css'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Alex Cunningham - Portfolio</title>
          <meta name="description" content="Portfolio of projects created by Alex Cunningham" />
        </head>
        <body>
          {children}
        </body>
      </html>
    )
  }