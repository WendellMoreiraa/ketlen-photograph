import './styles/globals.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="h-screen w-screen font-body">{children}</body>
    </html>
  );
}
