import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export const metadata = { title: 'Timeless Tile Restoration' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporatejuggly">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
