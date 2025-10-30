import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_35%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.06),transparent_35%)]">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
