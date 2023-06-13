import Footer from "pages/Footer";
import { Mobile } from "utils/MediaQuery";
import { NavLink } from "react-router-dom";
import LocaleSelect from "utils/locale/LocaleSelect";

const Nav = ({
  navActive,
  handleScroll,
  setNavActive,
  setOpen,
  language,
  file,
}) => {
  return (
    <nav className={navActive ? "active" : undefined}>
      <ul>
        <li onClick={() => handleScroll(1)}>OUR BUSINESS</li>
        <li onClick={() => handleScroll(2)}>OUR WORK</li>
        <li onClick={() => handleScroll(3)}>OUR TEAM</li>
        <li onClick={() => handleScroll(4)}>CONTACT US</li>
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

      <div className="pdfLink">
        <LocaleSelect />

        <a
          href={language === "en-US" ? file.enFile : file.koFile}
          alt={
            language === "en-US" ? "Introduction-Itda file" : "회사소개서 파일"
          }
          download
        >
          {language === "en-US" ? "Introduction-Itda.pdf" : "회사소개서.pdf"}
        </a>
      </div>

      <Mobile>
        <Footer />
      </Mobile>
    </nav>
  );
};

export default Nav;
