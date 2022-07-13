import Logo from "components/elements/Logo";
import Nav from "components/header/Nav";
import 'scss/pages/header.scss';
import { Twirl as Hamburger } from 'hamburger-react'
import { Desktop, Mobile } from "utils/MediaQuery";

const Header = ({
  handleScroll, 
  navActive, 
  setNavActive,
  isOpen,
  setOpen
}) => {
  
  return (
    <header className="header">
      <div className="header-wrap">
        <Mobile>
          <div className="header-top">
            <Hamburger 
              toggled={isOpen} 
              toggle={setOpen} 
              size={20}
              duration={0.4}
              distance="lg"
              easing="ease-in-out"
              onToggle={toggled => {
                if (toggled) {
                  // open a menu
                  setNavActive(true)
                } else {
                  // close a menu
                  setNavActive(false)
                }
              }} 
            />
            
            <Logo
              width='70'
              handleScroll={handleScroll}
            />
          </div>
          <Nav navActive={navActive} handleScroll={handleScroll}/>
        </Mobile>

        <Desktop>
          <Logo
            width='80'
            handleScroll={handleScroll}
          /> 

          <Nav handleScroll={handleScroll}/>
        </Desktop>
      </div>
    </header>
  )
}

export default Header