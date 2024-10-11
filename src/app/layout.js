
import "./globals.css";

export const metadata = {
  title: "Mooroot Cover Letter",
  description: "made by omar fertat",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
