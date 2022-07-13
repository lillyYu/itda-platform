import logo from 'images/logo.svg'

const Logo = ({width, handleScroll}) => {
  return (
    <img 
      src={logo} 
      alt="잇다 로고" 
      className='logo'
      style={{width: `${width}px`, "cursor" : "pointer"}}
      onClick={() => handleScroll(0)}
    />
  )
}

export default Logo