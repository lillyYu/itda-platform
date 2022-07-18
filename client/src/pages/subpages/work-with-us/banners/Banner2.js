import workWithUsText from 'data/work-with-us.json'

const Banner2 = () => {
  return (
    <>
      {
        workWithUsText.map((text, index) => {
          return(
            <p key={text.id} data-aos="fade-up" data-aos-delay={`${index*3}00`}>
              &#60;<em>div</em> <b>className</b> <span>= {text.title}</span> &#62; {text.content} &#60;<em>div</em>&#47;&#62;
            </p>
          )
        })
      }
    </>
  )
}

export default Banner2