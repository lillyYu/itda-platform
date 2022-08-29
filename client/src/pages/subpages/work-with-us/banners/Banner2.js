import workWithUsText from 'data/work-with-us.json'

const Banner2 = ({language}) => {
  return (
    <>
      {
        workWithUsText.map((text, index) => {
          return(
            <p key={text.id} data-aos="fade-up" data-aos-delay={`${index*3}00`}>
              &#60;<em>div</em> <b>className</b> <span>= {language === "ko" ? text.titleKo : text.titleEn}</span>&#62; {language === "ko" ? text.contentKo : text.contentEn} &#60;<em>div</em>&#47;&#62;
            </p>
          )
        })
      }
    </>
  )
}

export default Banner2