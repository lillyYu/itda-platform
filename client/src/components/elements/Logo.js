import logo from 'images/logo.svg'
import logoEn from 'images/logo-en.svg';
import GeneralContext from 'utils/context/GeneralContext';
import { useContext } from 'react';

const Logo = ({width, handleScroll}) => {
  const {language} = useContext(GeneralContext);

  return (
    <img 
      src={
        language === "ko"
        ? logo
        : logoEn
      } 
      alt="잇다 로고" 
      className='logo'
      style={{width: `${width}px`, "cursor" : "pointer"}}
      onClick={() => handleScroll(0)}
    />
  )
}

export default Logo