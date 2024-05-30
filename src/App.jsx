import "./App.css";
import { FAQ } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { ProductSection } from "./components/ProductSection";



function App() {
  return (
    <>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />      
        <Footer />
      </div>
    </>
  );
}

export default App;
