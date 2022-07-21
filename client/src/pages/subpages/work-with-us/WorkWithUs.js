import SectionTitle from "components/elements/SectionTitle"
import 'scss/pages/subpages/work-with-us.scss';
import { useEffect, useState } from "react";
import Banner1 from "./banners/Banner1";
import Banner2 from "./banners/Banner2";
import CopyToClipboard from "react-copy-to-clipboard";
import ModalPortal from 'utils/modal/ModalPortal';
import AlertMessage from "components/elements/AlertMessage";
import data from 'data/fake-data.json';
import BoardItem from "./board/BoardItem";
import axios from "axios";

const WorkWithUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [message, setMessage] = useState(false);

  const [withUs, setWithUs] = useState([])

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

      if(currentSlide === 1) {
        setCurrentSlide(0)
      }
    }, 6000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 3000);
    }
  }, [message]);

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

            <header><em>require</em> ('자신의 COLOR✨를 잃지 않는 팀웍')</header>

            <ul>
              <li>{workWithUsBanners[currentSlide].content}</li>
            </ul>
          </main>

          <div className="boards">
            <div className="noti">
              <p>✍ 지원서 양식은 자신을 표현할 수 있는 형태로 자유롭게 보내주세요!</p>
              <p>
                <CopyToClipboard
                  text={"dev@itdadev.com"}
                  onCopy={() => setMessage(true)}
                >
                  <span>👉 <u>dev@itdadev.com</u> 👈</span>
                </CopyToClipboard>
              </p>

              <ModalPortal>
                <AlertMessage show={message}>
                  클립보드에 복사되었습니다!
                </AlertMessage>
              </ModalPortal>
            </div>

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