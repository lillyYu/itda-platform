import 'scss/pages/main-banner.scss';
import banners from 'data/main-banner.json'
import { useState } from 'react';
import { useEffect } from 'react';
import { Desktop, Mobile } from 'utils/MediaQuery';

const MainBanner = ({sections}) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(()=>{
    const timer = setInterval(() => {
      setCurrentSlide(currentSlide + 1 );

      if(currentSlide === 3) {
        setCurrentSlide(1)
      }
    }, 4000);

    return () => clearInterval(timer);
  });

  return (
    <div className="main-banner"  ref={(el)=>sections.current[0]=el}>
      <div className="main-banner-wrap">
        <div className='banner-scroll'>
          <Desktop>
            {banners.map((banner) => {
              return(
                <figure 
                  key={banner.id}
                  className={currentSlide === banner.id ? `active` : undefined}
                >
                  <span style={{"color" : banner.color}}>&#60;</span>
                  <span style={{"color" : banner.color}}>&#47;&#62;</span>
                  <img src={banner.image} alt="배너 이미지"/>
                </figure>
              )
            })}
          </Desktop>
          <ul>
            {
              banners.map((banner) => {
                return(
                  <li 
                    key={banner.id} 
                    className={currentSlide === banner.id ? `active ${banner.className}` : undefined }
                  >
                    <div className='progress-bar'>
                      <span 
                        style={{
                          "backgroundColor": banner.color,
                        }}
                      />
                    </div>

                    <header className='title' style={{"color" : banner.color}}>
                      <i className="ri-arrow-down-s-line"/>
                      <span>{banner.title}</span>
                    </header>
  
                    <p className='main-content'>
                      <i className="ri-arrow-down-s-line"/>
                      <span>
                        {banner.mainContent}
                      </span>
                    </p>
  
                    <Mobile>
                      <div className='alignRight'>
                        <figure>
                          <img src={banner.image} alt="배너 이미지"/>
                        </figure>
                      </div>
                    </Mobile>
                    
                    <div className='sub-content'>
                      <i 
                        className="ri-folder-2-line"
                        style={{"color" : banner.color}}
                      />
                      <span>
                        {banner.subContent}
                      </span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainBanner