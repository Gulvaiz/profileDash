import '../styles/globals.css';

export const metadata = {
  title: 'Gulvaiz Alam - Personal Dashboard',
  description: 'A personal dashboard showcasing my professional profile, experience, skills, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}