import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WaitlistSection from './components/WaitlistSection';
import ValueProps from './components/ValueProps';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
            <WaitlistSection />
            <ValueProps />
        </div>
    );
}

export default App;