import SectionTitle from 'components/elements/SectionTitle';
import 'scss/pages/landing/our-work.scss';
import { useEffect, useState } from 'react';
import ModalPortal from 'utils/modal/ModalPortal';
import Modal from 'utils/modal/Modal';
import OurWorkDetail from 'pages/details/OurWorkDetail';
import axios from 'axios';

const OurWork = ({sections}) => {
  const [endPoint, setEndPoint] = useState(3);
  const [workIndex, setWorkIndex] = useState(0);
  const [ourWorks, setOurWorks] = useState([])

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

  const getOurWorks = async () => {
    try {
      const res = await axios.get(`/api/v1/our-work?page=1&size=4`);
      setOurWorks(res.data)
      console.log(res);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getOurWorks()
  }, [])
  
  return (
    <section 
      className="our-work" 
      ref={(el) => sections.current[2] = el}
    >
      <div className='our-work-wrap'>
        <SectionTitle title="OUR WORK" />

        <article>
          {
            modal &&
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
                      workIndex={workIndex}
                      setImgIndex={setImgIndex}
                      imgIndex={imgIndex}
                    />
                  </div>
                </Modal>
              </ModalPortal>
          }
          
          <ul>
            {
              ourWorks.map((work, index) => {
                return (
                  <li 
                    key={work.our_work_key}
                    data-aos="fade-up"
                    data-aos-delay={`${(index % 3) * 2}00`}
                    onClick={
                      () => {
                        setWorkIndex(work.our_work_key)
                        setModal(true)
                      }
                    }
                  >
                    <div className='hover-bg'>
                      <span><em>DETAIL</em></span>
                    </div>
                    <figure>
                      <img src={`${process.env.REACT_APP_GET_FILE}${work.thumbnail_file_path}/${work.thumbnail_temp_file_name}`} alt={`${work.title} thumbnail`}/>
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