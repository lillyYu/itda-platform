import Footer from 'pages/Footer';
import { Mobile } from 'utils/MediaQuery';
import { NavLink } from 'react-router-dom';
import LocaleSelect from 'utils/locale/LocaleSelect';

const Nav = ({ navActive, handleScroll, setNavActive, setOpen }) => {
  return (
    <nav className={navActive ? 'active' : undefined}>
      <ul>
        <li onClick={() => handleScroll(1)}>OUR BUSINESS</li>
        <li onClick={() => handleScroll(2)}>OUR WORK</li>
        <li onClick={() => handleScroll(3)}>CONTACT US</li>
        <li
          onClick={() => {
            setNavActive(false);
            setOpen(false);
          }}
        >
          <NavLink to="/with-us" activeclassname="active">
            WORK WITH US
          </NavLink>
        </li>
      </ul>

      <div className="notionLink">
        <LocaleSelect />

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
  );
};

export default Nav;
