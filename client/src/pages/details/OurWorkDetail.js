import 'scss/pages/details/our-work-detail.scss';
import tags from 'data/work-detail-tags.json';

const OurWorkDetail = ({
  workData,
  setImgIndex,
  imgIndex
}) => {

  return (
    <>
      <header>{workData.title}</header>
  
      <div className='work-detail-wrap'>
        <div className='work-detail-left'>
          <div className='gallery'>
            <div className='gallery-wrap'>
              <ul 
                style={{"width": `${workData.image.length}00%`, "right":`${imgIndex - 1}00%`}}
              >
                {
                  workData.image.map((src, index) => {
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
                if(workData.image.length >= imgIndex && imgIndex > 1) {
                  setImgIndex(imgIndex - 1)
                }
              }}
            />
  
            <span>
              <strong>{imgIndex}</strong> / {workData.image.length}
            </span>
  
            <i 
              className="ri-arrow-right-s-line"
              onClick={() => {
                if(workData.image.length > imgIndex) {
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
              <p>{workData.timeSpent}</p>
            </li>
  
            <li className='range'>
              <em>개발 범위</em>
              <ul className='range'>
                {
                  tags[0].range.map((range, i) => {
                    return(
                      <li 
                        key={range.id}
                        className={ workData.range.includes(range.id) ? "active" : undefined }
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
                  tags[1].os.map((os, i) => {
                    return(
                      <li 
                        key={os.id}
                        className={ workData.os.includes(os.id) ? "active" : undefined }
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
                  tags[2].lang.map((lang, i) => {
                    return(
                      <li 
                        key={lang.id}
                        className={ workData.lang.includes(lang.id)  ? "active" : undefined }
                      >{lang.name}</li>
                    )
                  })
                }
              </ul>
            </li>
  
            <li>
              <em>상세 설명</em>
              <p>
                악기 연습실/합주실을 찾아주는 서비스
                연습공간을 소유하고 있는 유저가 등록을 하고 연습하려는 유저가 해당 공간에 대한 가격과 일정을 예약하여 이용해주는 플랫폼
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default OurWorkDetail