import 'scss/pages/landing/main-banner.scss';
import banners from 'data/main-banner.json';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Desktop, Mobile } from 'utils/MediaQuery';
import GeneralContext from 'utils/context/GeneralContext';

const MainBanner = ({ sections }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [aniamtion, setAnimation] = useState(true);

  const { language } = useContext(GeneralContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(currentSlide + 1);
      setAnimation(true);

      if (currentSlide === 3) {
        setCurrentSlide(1);
      }
    }, 4000);

    return () => clearInterval(timer);
  });

  return (
    <div className="main-banner" ref={(el) => (sections.current[0] = el)}>
      <div className="main-banner-wrap">
        <div className="banner-scroll">
          <Desktop>
            <div className="banners">
              {banners.map((banner) => {
                return (
                  <figure
                    key={banner.id}
                    className={
                      currentSlide === banner.id ? `active` : undefined
                    }
                  >
                    <span style={{ color: banner.color }}>&#60;</span>
                    <span style={{ color: banner.color }}>&#47;&#62;</span>
                    <img src={banner.image} alt="배너 이미지" />
                  </figure>
                );
              })}
            </div>
          </Desktop>

          <ul>
            {banners.map((banner) => {
              return (
                <li
                  key={banner.id}
                  className={currentSlide === banner.id ? 'active' : undefined}
                >
                  <div className="progress-bar">
                    <span
                      style={{
                        backgroundColor: banner.color,
                        animationName: aniamtion && 'progressing',
                      }}
                    />
                  </div>

                  <header className="title" style={{ color: banner.color }}>
                    <i className="ri-arrow-down-s-line" />
                    <span>{banner.title}</span>
                  </header>

                  <p className="main-content">
                    <i className="ri-arrow-down-s-line" />
                    <span>
                      {language === 'en-US'
                        ? banner.mainContentEn
                        : banner.mainContentKo}
                    </span>
                  </p>

                  <Mobile>
                    <div className="alignRight">
                      <div className="banners">
                        <figure>
                          <img src={banner.image} alt="배너 이미지" />
                        </figure>
                      </div>
                    </div>
                  </Mobile>

                  <div className="sub-content">
                    <i
                      className="ri-folder-2-line"
                      style={{ color: banner.color }}
                    />
                    <span>
                      {language === 'en-US'
                        ? banner.subContentEn
                        : banner.subContentKo}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
