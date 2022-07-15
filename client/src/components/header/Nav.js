import Footer from "pages/Footer"
import { Mobile } from "utils/MediaQuery"
import { Link, NavLink } from "react-router-dom";

const Nav = ({navActive, handleScroll}) => {
  return (
    <nav className={navActive ? "active" : undefined}>
      <ul>
        <li onClick={() => handleScroll(1)}>
          <Link to="/">OUR BUSINESS</Link>
        </li>
        <li onClick={() => handleScroll(2)}>
          <Link to="/">OUR WORK</Link>
        </li>
        <li onClick={() => handleScroll(3)}>
          <Link to="/">CONTACT US</Link>
        </li>
        <li>
          <NavLink to="/with-us" activeclassname="active" >WORK WITH US</NavLink>
        </li>
      </ul>
      
      <div>
        <a 
          href="https://itdadev.notion.site/itdadev/ITDA-564620af541b43a389410d9bfef01285"
          rel="noreferrer"
          target="_blank"
        >
          NOTION
        </a>
      </div>

      <Mobile>
        <Footer />
      </Mobile>
    </nav>
  )
}

export default Nav