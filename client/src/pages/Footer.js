import Logo from "components/elements/Logo"
import { Desktop } from "utils/MediaQuery"
import 'scss/pages/footer.scss';
import GeneralContext from "utils/context/GeneralContext";
import { useContext } from "react";

const Footer = () => {
  const {language} = useContext(GeneralContext);

  return (
    <footer className="footer">
      <div className="footer-wrap">
        <ul>
          <li>© 2022 All Rights Reserved</li>
          <li>
            {
              language === "ko"
              ? "사업자 등록번호 879 - 81 - 02121"
              : "corporate registration number 879 - 81 - 02121"
            }
            
          </li>
        </ul>
        <Desktop>
          <Logo width={80}/>
        </Desktop>
      </div>
    </footer>
  )
}

export default Footer