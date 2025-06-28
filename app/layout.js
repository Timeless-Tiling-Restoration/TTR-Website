import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata = { title: 'Timeless Tile Restoration' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporatejuggly">
      <body>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
