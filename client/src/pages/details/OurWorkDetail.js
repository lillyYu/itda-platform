import 'scss/pages/details/our-work-detail.scss';
import tags from 'data/work-detail-tags.json';
import { useEffect, useState } from 'react';
import axios from 'axios';

const OurWorkDetail = ({
  workIndex,
  setImgIndex,
  imgIndex
}) => {
  const [workDetail, setWorkDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(workIndex, "workIndex")

  useEffect(() => {
    const getWorkDetail = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/v1/our-work/${workIndex}`);
        setWorkDetail(res.data)
        console.log(res, ":ddd");
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }

    getWorkDetail()
  }, [workIndex])

  console.log(workDetail)

  return (
    <>
      <header>{workDetail?.ourWork.title}</header>
  
      <div className='work-detail-wrap'>
        <div className='work-detail-left'>
          <div className='gallery'>
            <div className='gallery-wrap'>
              <ul 
                style={{"width": `${workDetail?.ourWorkImgList.length}00%`, "right":`${imgIndex - 1}00%`}}
              >
                {
                  workDetail?.image.map((src, index) => {
                    return (
                      <li key={index}>
                        <figure>
                          <img src={src} alt="our work detail"/>
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
                if(workDetail?.image.length >= imgIndex && imgIndex > 1) {
                  setImgIndex(imgIndex - 1)
                }
              }}
            />
  
            <span>
              <strong>{imgIndex}</strong> / {workDetail?.ourWorkImgList.length}
            </span>
  
            <i 
              className="ri-arrow-right-s-line"
              onClick={() => {
                if(workDetail?.ourWorkImgList.length > imgIndex) {
                  setImgIndex(imgIndex + 1)
                }
              }}
            />
          </div>
        </div>
  
        <div className='work-detail-right'>
          <ul>
            <li className='time-spent'>
              <em>개발 기간</em>
              <p>{workDetail?.ourWork.work_timespent}</p>
            </li>
  
            <li className='range'>
              <em>개발 범위</em>
              <ul className='range'>
                {
                  tags[0].range.map((range) => {
                    return(
                      <li 
                        key={range.id}
                        className={ workDetail?.ourWork.work_range.includes(range.id) ? "active" : undefined }
                      >
                        {range.name}
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
                        className={ workDetail?.ourWork.work_os.includes(os.id) ? "active" : undefined }
                      >{os.name}</li>
                    )
                  })
                }
              </ul>
            </li>
  
            <li className='lang'>
              <em>개발 언어</em>
              <ul className='lang'>
                {
                  tags[2].lang.map((lang) => {
                    return(
                      <li 
                        key={lang.id}
                        className={ workDetail?.ourWork.work_lang.includes(lang.id)  ? "active" : undefined }
                      >{lang.name}</li>
                    )
                  })
                }
              </ul>
            </li>
  
            <li>
              <em>상세 설명</em>
              <p>
                {workDetail?.ourWork.content}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default OurWorkDetail