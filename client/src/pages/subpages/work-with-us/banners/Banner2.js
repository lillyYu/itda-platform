import workWithUsText from "data/work-with-us.json";

const Banner2 = ({ language }) => {
  return (
    <>
      {workWithUsText.map((text, index) => {
        return (
          <p key={text.id} data-aos="fade-up" data-aos-delay={`${index * 3}00`}>
            &#60;<em>div</em> <b>className</b>{" "}
            <span>= {language === "en-US" ? text.titleEn : text.titleKo}</span>
            &#62; {language === "en-US" ? text.contentEn : text.contentKo} &#60;
            <em>div</em>&#47;&#62;
          </p>
        );
      })}
    </>
  );
};

export default Banner2;
