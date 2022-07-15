import SectionTitle from 'components/elements/SectionTitle';
import 'scss/pages/our-work.scss';
import ourWorks from 'data/our-work.json'
import { useState } from 'react';
import ModalPortal from 'utils/modal/ModalPortal';
import Modal from 'utils/modal/Modal';
import OurWorkDetail from 'pages/details/OurWorkDetail';

const OurWork = ({sections}) => {
  const [endPoint, setEndPoint] = useState(3);
  const [workIndex, setWorkIndex] = useState(0);

  const [modal, setModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(1);

  const handleModalShow = (status) => {
    setModal(status);
  };

  const handleLoadMore = () => {
    if (ourWorks.length >= endPoint) {
      setEndPoint(endPoint + 3)
    }
  }

  const workData = ourWorks[workIndex];

  return (
    <section 
      className="our-work" 
      ref={(el) => sections.current[2] = el}
    >
      <div className='our-work-wrap'>
        <SectionTitle title="OUR WORK" />

        <article>
          <ModalPortal>
            <Modal 
              show={modal}
              handleModalShow={handleModalShow}
              setImgIndex={setImgIndex}
            >
              <div className='work-detail'>
                <span onClick={() => {
                    setModal(false);
                    setImgIndex(1);
                  }}>
                  <i className="ri-close-line"/>
                </span>

                <OurWorkDetail 
                  workData={workData}
                  setImgIndex={setImgIndex}
                  imgIndex={imgIndex}
                />
              </div>
            </Modal>
          </ModalPortal>
          
          <ul>
            {
              ourWorks.slice(0, endPoint).map((work, index) => {
                return (
                  <li 
                    key={work.id}
                    data-aos="fade-up"
                    data-aos-delay={`${(index % 3) * 2}00`}
                    onClick={
                      () => {
                        setWorkIndex(work.id - 1)
                        setModal(true)
                      }
                    }
                  >
                    <div className='hover-bg'>
                      <span><em>DETAIL</em></span>
                    </div>
                    <figure>
                      <img src={work.image[0]} alt={`${work.title} thumbnail`}/>
                    </figure>
                  </li>
                )
              })
            }
          </ul>

          <div className='alignCenter'>
            <button 
              className={ourWorks.length <= endPoint ? "displayNone" : undefined}
              onClick={() => handleLoadMore()}
            >
              MORE
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default OurWork