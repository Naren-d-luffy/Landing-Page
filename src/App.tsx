import './App.css'
import { CtaSection } from './Components/CtaSection/CtaSection';
import { FeaturesSections } from './Components/FeaturesSection/FeaturesSections';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Section2 } from './Components/Section2/Section2';

function App() {

  return (
    <>
  <Navbar />
<main>
  <section>
  <Home />
  </section>

    <section>
      <Section2 />
    </section>

<section>
  <FeaturesSections />
</section>

<section>
  <CtaSection />
</section>

</main>

<footer>
<Footer />
</footer>  
  
    </>
  )
}

export default App
