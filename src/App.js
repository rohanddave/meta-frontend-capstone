import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import SectionContainer from './components/SectionContainer';
import SpecialSection from './components/SpecialSection';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <div className="App">
      <Header />

      <SectionContainer>
        <HomeSection />
      </SectionContainer>

      <SectionContainer>
        <SpecialSection />
      </SectionContainer>

      <SectionContainer>
        <TestimonialSection />
      </SectionContainer>

      <SectionContainer>
        <Footer />
      </SectionContainer>

    </div>
  );
}

export default App;
