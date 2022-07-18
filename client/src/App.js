import Footer from "pages/Footer";
import Header from "pages/Header";
import { useEffect, useState } from "react";
import { useRef } from "react";
import 'scss/commons/master.scss';
import { Desktop } from "utils/MediaQuery";
import "aos/dist/aos.css";
import Aos from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "Landing";
import WorkWithUs from "pages/subpages/work-with-us/WorkWithUs";

function App() {
  const sections = useRef([]);

  const [navActive, setNavActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  
  const handleScroll = (index) => {
    setNavActive(false);
    setOpen(false);

    sections.current[index]?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    Aos.init({
      once: true,
      duration : 800,
      easing: 'ease-in-out-cubic',
      anchorPlacement: 'top-bottom',
      mirror: true
    });
  })
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header 
          handleScroll={handleScroll} 
          navActive={navActive}
          setNavActive={setNavActive}
          isOpen={isOpen}
          setOpen={setOpen}
        />

        <main className="main-contents">
          <Routes>
            <Route path="/" element={<Landing sections={sections}/>} />
            <Route path="/with-us" element={<WorkWithUs />} />
          </Routes>
        </main>

        <Desktop><Footer/></Desktop>
      </div>
    </BrowserRouter>
  );
}

export default App;
