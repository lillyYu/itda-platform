import SectionTitle from "components/elements/SectionTitle"
import 'scss/pages/subpages/work-with-us.scss';
import { useEffect, useState } from "react";
import Banner1 from "./banners/Banner1";
import Banner2 from "./banners/Banner2";
import BoardItem from "./board/BoardItem";
import axios from "axios";
import Information from "./information/Information";

const WorkWithUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [withUs, setWithUs] = useState([])
  const [playBtn, setPlayBtn] = useState(false)

  const workWithUsBanners = [
    {
      id: 0,
      content: <Banner1 />
    },
    {
      id: 1,
      content: <Banner2/>
    }
  ]

  useEffect(()=>{
    const timer = setInterval(() => {
      setCurrentSlide(currentSlide + 1 );

      if(currentSlide === 1 ) {
        setCurrentSlide(0)
      }
    }, 5000);

    if(playBtn) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [currentSlide, playBtn]);

  useEffect(() => {
    const getWorkWithUs = async () => {
      try {
        const res = await axios.get(`/api/v1/with-us`);
        setWithUs(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getWorkWithUs()
  }, [])
  
  return (
    <section className="work-with-us">
      <div className="work-with-us-wrap">

        <article>
          <main>
            <SectionTitle title="WORK WITH US" />

            <header>
              <em>require</em> ('자신의 COLOR✨를 잃지 않는 팀웍')
              <i 
                onClick={() => {setPlayBtn(!playBtn)}}
                className={playBtn ? "ri-play-line" : "ri-pause-line"}
              />
            </header>


            <ul>
              <li>{workWithUsBanners[currentSlide].content}</li>
            </ul>
          </main>

          <div className="boards">
            <Information />

            <ul>
              {
                withUs?.map((data) => {
                  return(
                    <li key={data.with_us_key}>
                      <BoardItem
                        data={data}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default WorkWithUs