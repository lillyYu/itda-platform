import SectionTitle from "components/elements/SectionTitle"
import 'scss/pages/landing/contact-us.scss';
import ContactForm from "components/contact-form/ContactForm";
import Map from "components/contact-form/Map";
import CopyToClipboard from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import ModalPortal from "utils/modal/ModalPortal";
import AlertMessage from "components/elements/AlertMessage";
import axios from "axios";
import CodeTitle from "components/elements/CodeTitle";

const ContactUs = ({sections}) => {
  const [message, setMessage] = useState(false);
  const [file, setFile] = useState({})

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 3000);
    }
  }, [message]);

  useEffect(() => {
    const getIntroductionFile = async () => {
      try {
        const res = await axios.get(`/api/v1/introduction`);
        setFile(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    getIntroductionFile()
  }, [])
  

  return (
    <section 
      className="contact-us"
      ref={(el) => sections.current[3] = el}
    >
      <SectionTitle title="CONTACT US" />

      <div className="contact-us-wrap">
        <address data-aos="fade-right">
          <CodeTitle title="ITDA Address"/>

          <div className="naver-map">
            <Map/>
          </div>

          <ul>
            <li>
              <i className="ri-mail-line pink"/>
              <a 
                href="mailto:dev@itdadev.com"
                rel="noreferrer"
              >
                dev@itdadev.com
              </a>  
            </li>
            <li>
              <i className="ri-phone-line purple"/>
              <a href="tel:01033242474">
                +82 010 3324 2474
              </a>
            </li>
            
            <li>
              <i className="ri-map-pin-2-line blue"/>
              <CopyToClipboard
                text={"서울특별시 서초구 서초중앙로 20길 33-17, 서초빌리지 1, 202호"}
                onCopy={() => setMessage(true)}
              >
                <p>
                  <span>서울특별시 서초구 서초중앙로 20길 33-17</span>
                  <span>서초빌리지 1, 202호</span>
                </p>
              </CopyToClipboard>
              <ModalPortal>
                <AlertMessage show={message}>
                  클립보드에 복사되었습니다!
                </AlertMessage>
              </ModalPortal>
            </li>
            
            <li>
              <i className="ri-survey-line"/>
              <a 
                href={`/api/v1/file/download?path=${file?.attach_file_path}&tname=${file?.temp_file_name}&name=${file?.origin_file_name}`} 
                download
              >
                회사소개서.pdf
              </a>
            </li>
          </ul>
        </address>  

        <ContactForm/>
      </div>
    </section>
  )
}

export default ContactUs