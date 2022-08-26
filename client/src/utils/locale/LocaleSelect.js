import { useState } from "react";

const LocaleSelect = () => {
  const [boxOpen, setBoxOpen] = useState(false)
  const [locale, setLocale] = useState(localStorage.getItem("locale") ?? "ko");

  const handleLocale = (e) => {
    setLocale(e)
    localStorage.setItem("locale", e);
    window.location.reload()
  }

  return (
    <div 
      className="locale-select"
      onClick={() => setBoxOpen(!boxOpen)}
    >
      {locale === "en-US" ? "EN" : "KO"}
      {
        boxOpen &&
        <ul>
          <li
            className={locale === "en-US" ? "active" : ""}
            onClick={() => handleLocale("en-US")}
          >
            EN
          </li>
          <li
            className={locale === "ko" ? "active" : ""}
            onClick={() => handleLocale("ko")}
          >
            KO
          </li>
        </ul>
      }
    </div>
  )
}

export default LocaleSelect