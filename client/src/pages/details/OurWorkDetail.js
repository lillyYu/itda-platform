import 'scss/pages/details/our-work-detail.scss';
import tags from 'data/work-detail-tags.json';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { GetOurWorksDetail } from 'api/ApiUrl';
import { FormattedMessage } from 'react-intl';
import GeneralContext from 'utils/context/GeneralContext';

const OurWorkDetail = ({
  setWorkIndex,
  workIndex,
  setImgIndex,
  imgIndex
}) => {
  const {language} = useContext(GeneralContext)
  const [workDetail, setWorkDetail] = useState([]);

  useEffect(() => {
    const getWorkDetail = async () => {
      try {
        const res = await axios.get(`${GetOurWorksDetail}/${workIndex}`);
        setWorkDetail(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getWorkDetail()
  }, [workIndex])

  return (
    <>
      <header>
        {
          language === "ko"
          ? workDetail.ourWork?.title_ko
          : workDetail.ourWork?.title_en
        }
      </header>
  
      <div className='work-detail-wrap'>
        <div className='work-detail-left'>
          <div className='gallery'>
            <div className='gallery-wrap'>
              <ul 
                style={{"width": `${workDetail.ourWorkImgList?.length}00%`, "right":`${imgIndex - 1}00%`}}
              >
                {
                  workDetail.ourWorkImgList?.map((img, index) => {
                    return (
                      <li key={index}>
                        <figure>
                          <img 
                            src={`${process.env.REACT_APP_GET_FILE}${img.attach_file_path}/${img.temp_file_name}`} 
                            alt="our work detail"
                          />
                        </figure>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
  
          <div className='controller'>
            <i 
              className="ri-arrow-left-s-line"
              onClick={() => {
                if(workDetail.ourWorkImgList?.length >= imgIndex && imgIndex > 1) {
                  setImgIndex(imgIndex - 1)
                }
              }}
            />
  
            <span>
              <strong>{imgIndex}</strong> / {workDetail.ourWorkImgList?.length}
            </span>
  
            <i 
              className="ri-arrow-right-s-line"
              onClick={() => {
                if(workDetail.ourWorkImgList?.length > imgIndex) {
                  setImgIndex(imgIndex + 1)
                }
              }}
            />
          </div>
        </div>
  
        <div className='work-detail-right'>
          <ul>
            <li className='time-spent'>
              <em>
                <FormattedMessage
                  id="developing.span"
                  defaultMessage="개발 기간"
                />
              </em>
              <p>
                {workDetail.ourWork?.work_timespent} <FormattedMessage
                  id="months"
                  defaultMessage="개월"
                />
              </p>
            </li>
  
            <li className='range'>
              <em>
                <FormattedMessage
                  id="developing.range"
                  defaultMessage="개발 범위"
                />
              </em>
              <ul className='range'>
                {
                  tags[0].range.map((range) => {
                    return(
                      <li 
                        key={range.id}
                        className={ workDetail.ourWork?.work_range.includes(range.id) ? "active" : undefined }
                      >
                        {
                          language === "ko" 
                          ? range.nameKo
                          : range.nameEn
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </li>
  
            <li className='os'>
              <em>OS</em>
              <ul className='os'>
                {
                  tags[1].os.map((os) => {
                    return(
                      <li
                        key={os.id}
                        className={ workDetail.ourWork?.work_os.includes(os.id) ? "active" : undefined }
                      >{os.name}</li>
                    )
                  })
                }
              </ul>
            </li>
  
            <li className='lang'>
              <em>
                <FormattedMessage
                  id="developing.language"
                  defaultMessage="개발 언어"
                />
              </em>
              <ul className='lang'>
                {
                  tags[2].lang.map((lang) => {
                    return(
                      <li 
                        key={lang.id}
                        className={ workDetail.ourWork?.work_lang.includes(lang.id)  ? "active" : undefined }
                      >{lang.name}</li>
                    )
                  })
                }
              </ul>
            </li>
  
            <li className='description'>
              <em>
                <FormattedMessage
                  id="detail.description"
                  defaultMessage="상세 설명"
                />
              </em>
              <p>
                {
                  language === "ko"
                  ? workDetail.ourWork?.content_ko
                  : workDetail.ourWork?.content_en
                }
              </p>
            </li>
          </ul>

          <div className="prev-next">
            <button
              disabled={workDetail.ourWork?.prev_our_work_key === undefined}
              onClick={() => {
                setWorkIndex(workDetail?.ourWork.prev_our_work_key);
                setImgIndex(1);
              }}
            >
              <i className="ri-arrow-left-line"/>
              Prev
            </button>

            <button
              disabled={workDetail.ourWork?.next_our_work_key === undefined}
              onClick={() => {
                setWorkIndex(workDetail?.ourWork.next_our_work_key);
                setImgIndex(1);
              }}
            >
              Next
              <i className="ri-arrow-right-line"/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurWorkDetail