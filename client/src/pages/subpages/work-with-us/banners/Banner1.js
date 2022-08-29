import { FormattedMessage } from "react-intl"

const Banner1 = () => {
  return (
    <>
      <p data-aos="fade-up">
        <FormattedMessage
          id="workWithUsBanner.paragraph1"
          defaultMessage="잇다는 자신만의 강한 색깔을 가진 사람들이 모인 조직이고, 이는 매우 소중한 가능성이라고 생각합니다."
        />
      </p>
      <p data-aos="fade-up" data-aos-delay="400">
        <FormattedMessage 
          id="workWithUsBanner.paragraph2"
          values = {{
            breakLine: <br/>
          }}
          defaultMessage="본인의 개성을 강하게 표현하는 만큼 서로 존중할 줄 아는 사람들이 모여있는 조직입니다.
          {breakLine}같은 목표를 바라보며 몰입하는 과정에서 자신의 강한 색을 가진 사람들이 서로 존중하며 
          {breakLine}개인의 개성을 잃지 않는 것이 얼마나 중요한지 잘 이해하고 있습니다."
        />
      </p>
  
      <p data-aos="fade-up" data-aos-delay="800">
        <FormattedMessage 
          id="workWithUsBanner.paragraph3"
          values = {{
            breakLine: <br/>
          }}
          defaultMessage="우리는 개인이 가지고 있는 고유의 COLOR를 잃지 않고 업무를 할 수 있는 환경을 회사에서
          {breakLine}만들어가고 동료들이 서로 존중하는 문화를 지속한다면 수준 높은 성공을 이뤄낼 것이라 자신합니다."
        />
      </p>
    </> 
  )
}

export default Banner1