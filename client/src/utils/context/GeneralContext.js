const { createContext, useEffect } = require("react");

const GeneralContext = createContext();

export default GeneralContext;

export const GeneralProvider = ({ children }) => {
  const language = localStorage.getItem("locale");

  useEffect(() => {
    localStorage.setItem("locale", "ko");
  }, []);

  const contextData = {
    language: language,
  };

  return (
    <GeneralContext.Provider value={contextData}>
      {children}
    </GeneralContext.Provider>
  );
};
