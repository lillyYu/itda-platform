import { useMediaQuery } from 'react-responsive'


const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 })
  return isMobile ? children : null
}

// const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
//   return isTablet ? children : null
// }

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}

export {Desktop, Mobile}