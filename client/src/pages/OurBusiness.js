import 'scss/pages/our-business.scss';
import ourBusiness from 'data/our-business.json';
import { Desktop, Mobile } from 'utils/MediaQuery';
import SectionTitle from 'components/elements/SectionTitle';

const OurBusiness = ({sections}) => {
  return (
    <section 
      className="our-business" 
      ref={(el)=>sections.current[1]=el}
    >
      <div className='our-business-wrap'>
        <Mobile>
          <SectionTitle title="OUR BUSINESS" />
        </Mobile>

        <article>
          <Desktop>
            <div className='print'>
              <SectionTitle title="OUR BUSINESS" />

              <div>
                {
                  ourBusiness.map((business) => {
                    return(
                      <header key={business.id}>
                        <span>0{business.id}</span>
                        <p>
                          <strong style={{color: business.color}}>print</strong>
                          <span>('{business.title}')</span>
                        </p>
                      </header>
                    )
                  })
                }
              </div>
            </div>
          </Desktop>
          
          <ul>
            {
              ourBusiness.map((business) => {
                return(
                  <li key={business.id}>
                    <header>
                      <img src={business.image} alt="tag"/>
                      <span>0{business.id}</span>
                      <p>{business.subTitle}</p>
                    </header>

                    <p>
                      {business.content}
                    </p>
                  </li>
                )
              })
            }
          </ul>
        </article>
      </div>
    </section>
  )
}

export default OurBusiness