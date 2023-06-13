import SectionTitle from "components/elements/SectionTitle";
import "scss/pages/landing/contact-us.scss";
import ContactForm from "components/contact-form/ContactForm";
import Map from "components/contact-form/Map";
import CopyToClipboard from "react-copy-to-clipboard";
import { useContext, useEffect, useState } from "react";
import ModalPortal from "utils/modal/ModalPortal";
import AlertMessage from "components/elements/AlertMessage";
import axios from "axios";
import CodeTitle from "components/elements/CodeTitle";
import { FileDownloadUrl, GetIntroductionFile } from "api/ApiUrl";
import GeneralContext from "utils/context/GeneralContext";
import { FormattedMessage } from "react-intl";

const ContactUs = ({ sections }) => {
  const { language } = useContext(GeneralContext);
  const [message, setMessage] = useState(false);
  const [file, setFile] = useState({
    koFile: "",
    enFile: "",
  });

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 3000);
    }
  }, [message]);

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
    <section className="contact-us" ref={(el) => (sections.current[4] = el)}>
      <SectionTitle title="CONTACT US" />

      <div className="contact-us-wrap">
        <address data-aos="fade-right">
          <CodeTitle title="ITDA Address" />

          <div className="naver-map">
            <Map language={language} />
          </div>

          <ul>
            <li>
              <i className="ri-mail-line pink" />
              <a href="mailto:dev@itdadev.com" rel="noreferrer">
                dev@itdadev.com
              </a>
            </li>
            <li>
              <i className="ri-phone-line purple" />
              <a href="tel:01033242474">+82 010 3324 2474</a>
            </li>

            <li>
              <i className="ri-map-pin-2-line blue" />
              <CopyToClipboard
                text={
                  language === "en-US"
                    ? "Starting Building, 2F, 5, Teheran-ro 38-gil, Gangnam-gu, Seoul, Republic of Korea"
                    : "서울시 강남구 테헤란로 38길 5, 2층 (스타팅빌딩)"
                }
                onCopy={() => setMessage(true)}
              >
                {language === "en-US" ? (
                  <p>
                    <span>Starting Building, 2F,</span>
                    <span>
                      5, Teheran-ro 38-gil, Gangnam-gu,
                      <br />
                      Seoul, Republic of Korea
                    </span>
                  </p>
                ) : (
                  <p>
                    <span>서울시 강남구 테헤란로 38길 5, 2층 (스타팅빌딩)</span>
                  </p>
                )}
              </CopyToClipboard>
              <ModalPortal>
                <AlertMessage show={message}>
                  <FormattedMessage
                    id="copied.to.clipboard"
                    defaultMessage="클립보드에 복사되었습니다!"
                  />
                </AlertMessage>
              </ModalPortal>
            </li>

            <li>
              <i className="ri-survey-line" />
              <a
                href={language === "en-US" ? file.enFile : file.koFile}
                alt={
                  language === "en-US"
                    ? "Introduction-Itda file"
                    : "회사소개서 파일"
                }
                download
              >
                {language === "en-US"
                  ? "Introduction-Itda.pdf"
                  : "회사소개서.pdf"}
              </a>
            </li>
          </ul>
        </address>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
