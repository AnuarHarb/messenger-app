import "./globals.css";

export const metadata = {
  title: "Chat de FCA",
  description: "Chatea con tus compañeros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
