import ContactUs from "pages/ContactUs";
import Footer from "pages/Footer";
import Header from "pages/Header";
import MainBanner from "pages/MainBanner";
import OurBusiness from "pages/OurBusiness";
import OurWork from "pages/OurWork";
import { useState } from "react";
import { useRef } from "react";
import 'scss/commons/master.scss';
import { Desktop } from "utils/MediaQuery";

function App() {
  const sections = useRef([]);

  const [navActive, setNavActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  
  const handleScroll = (index) => {
    setNavActive(false);
    setOpen(false);

    sections.current[index].scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  return (
    <div className="App">
      <Header 
        handleScroll={handleScroll} 
        navActive={navActive}
        setNavActive={setNavActive}
        isOpen={isOpen}
        setOpen={setOpen}
      />

      <main className="main-contents">
        <MainBanner sections={sections}/>
        <OurBusiness sections={sections}/>
        <OurWork sections={sections}/>
        <ContactUs sections={sections}/>
      </main>

      <Desktop><Footer/></Desktop>
    </div>
  );
}

export default App;
