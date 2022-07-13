import SectionTitle from "components/elements/SectionTitle"
import 'scss/pages/contact-us.scss';
import pdf from 'images/itdaCompanyInfo.pdf'
import ContactForm from "components/contact-form/ContactForm";

const ContactUs = ({sections}) => {
  return (
    <section 
      className="contact-us"
      ref={(el) => sections.current[3] = el}
    >
      <div className="contact-us-wrap">
        <SectionTitle title="CONTACT US" />

        <address>
          <h3>
            &#60; <span>div</span> <span>className</span> <span> ='ITDA Address'</span> &#47;&#62;
          </h3>

          <div className="naver-map">

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
              <p>
                <span>서울특별시 서초구 서초중앙로 20길 33-17</span>
                <span>서초빌리지 1, 202호</span>
              </p>
            </li>
            
            <li>
              <i className="ri-survey-line"/>
              <a href={pdf} download>
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