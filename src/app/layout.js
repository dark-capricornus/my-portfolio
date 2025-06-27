// app/layout.jsx
import "./globals.css";
import TransitionProvider from "./components/transitionProvider";

export const metadata = {
  title: "My Portfolio | Developer & Designer",
  description: "Welcome to my personal portfolio showcasing my projects, skills, and experience as a developer and designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>      <body className="antialiased">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
