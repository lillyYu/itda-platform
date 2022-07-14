import Logo from "components/elements/Logo"
import { Desktop } from "utils/MediaQuery"
import 'scss/pages/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <ul>
          <li>© 2022 All Rights Reserved</li>
          <li>사업자 등록번호 879 - 81 - 02121</li>
        </ul>
        <Desktop>
          <Logo width={80}/>
        </Desktop>
      </div>
    </footer>
  )
}

export default Footer