import { useContext, useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

import Logo from "components/elements/Logo";
import Nav from "components/header/Nav";
import { Desktop, Mobile } from "utils/MediaQuery";

import "scss/pages/header.scss";
import { FileDownloadUrl, GetIntroductionFile } from "api/ApiUrl";
import axios from "axios";
import GeneralContext from "utils/context/GeneralContext";

const Header = ({ handleScroll, navActive, setNavActive, isOpen, setOpen }) => {
  const { language } = useContext(GeneralContext);

  const [file, setFile] = useState({
    koFile: "",
    enFile: "",
  });

  useEffect(() => {
    const getIntroductionFile = async () => {
      try {
        const res = await axios.get(`${GetIntroductionFile}`);
        const ko = res.data[0];
        const en = res.data[1];

        setFile({
          koFile: `${FileDownloadUrl}?path=${ko?.attach_file_path}&tname=${ko?.temp_file_name}&name=${ko?.origin_file_name}`,
          enFile: `${FileDownloadUrl}?path=${en?.attach_file_path}&tname=${en?.temp_file_name}&name=${en?.origin_file_name}`,
        });
      } catch (error) {}
    };

    getIntroductionFile();
  }, []);

  return (
    <header className="header">
      <div className="header-wrap">
        <Mobile>
          <div className="header-top">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              duration={0.4}
              distance="lg"
              easing="ease-in-out"
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setNavActive(true);
                } else {
                  // close a menu
                  setNavActive(false);
                }
              }}
            />

            <Logo width="70" handleScroll={handleScroll} />
          </div>

          <Nav
            navActive={navActive}
            handleScroll={handleScroll}
            setNavActive={setNavActive}
            setOpen={setOpen}
          />
        </Mobile>

        <Desktop>
          <Logo width="80" handleScroll={handleScroll} />

          <Nav
            navActive={navActive}
            handleScroll={handleScroll}
            setNavActive={setNavActive}
            setOpen={setOpen}
            language={language}
            file={file}
          />
        </Desktop>
      </div>
    </header>
  );
};

export default Header;
