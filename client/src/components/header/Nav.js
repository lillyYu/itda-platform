import Footer from "pages/Footer"
import { Mobile } from "utils/MediaQuery"

const Nav = ({navActive, handleScroll}) => {
  return (
    <nav className={navActive ? "active" : undefined}>
      <ul>
        <li onClick={() => handleScroll(1)}>
          OUR BUSINESS
        </li>
        <li onClick={() => handleScroll(2)}>
          OUR WORK
        </li>
        <li onClick={() => handleScroll(3)}>
          CONTACT US
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