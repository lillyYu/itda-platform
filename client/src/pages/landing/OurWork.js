import SectionTitle from 'components/elements/SectionTitle';
import 'scss/pages/landing/our-work.scss';
import { useEffect, useState } from 'react';
import ModalPortal from 'utils/modal/ModalPortal';
import Modal from 'utils/modal/Modal';
import OurWorkDetail from 'pages/details/OurWorkDetail';
import axios from 'axios';
import { GetOurWorks } from 'api/ApiUrl';
import { LOAD_SIZE_3 } from 'api/StaticValues';

const OurWork = ({sections}) => {
  const [page, setPage] = useState(1);

  const [modal, setModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(1);

  const [workIndex, setWorkIndex] = useState(0);

  const [ourWorks, setOurWorks] = useState([]);
  const [totalLength, setTotalLength] = useState(0);

  const maxPages = totalLength / LOAD_SIZE_3;

  const handleModalShow = (status) => {
    setModal(status);
  };

  const handleLoadMore = async () => {
    if (page < maxPages) {
      setPage(page + 1)

      try {
        const res = await axios.get(`${GetOurWorks}?page=${page + 1}&size=${LOAD_SIZE_3}`);
        setOurWorks(ourWorks.concat(res.data.data));
  
      } catch (error) {
        console.log(error);
      }
    } else {
      return undefined
    }
  }

  useEffect(() => {
    const getOurWorks = async () => {
      try {
        const res = await axios.get(`${GetOurWorks}?page=1&size=3`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setTotalLength(res.data.totalCnt);
        setOurWorks(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

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
                    setWorkIndex={setWorkIndex}
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
              ourWorks?.map((work, index) => {
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
              className={page < maxPages ? undefined : "displayNone"}
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