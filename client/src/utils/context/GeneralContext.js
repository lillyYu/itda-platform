const { createContext } = require("react");

const GeneralContext = createContext()

export default GeneralContext;

export const GeneralProvider = ({children}) => {
  const language = localStorage.getItem("locale")
  
  const contextData = {
    language: language
  } 

  return(
    <GeneralContext.Provider value={contextData}>
      {children}
    </GeneralContext.Provider>
  )
}