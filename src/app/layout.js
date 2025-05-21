import '../styles/globals.css';

export const metadata = {
  title: 'Gulvaiz Alam - Personal Dashboard',
  description: 'A personal dashboard showcasing my professional profile, experience, skills, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}