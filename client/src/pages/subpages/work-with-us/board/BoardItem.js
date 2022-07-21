import { useRef, useState } from "react";

const BoardItem = ({
  data
}) => {
  const content = useRef(null);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");

    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={`accordionSection ${setActive}`}>
      <div className="accordion" onClick={toggleAccordion}>
        <p className="accordionTitle">
          <strong>{data.position}</strong>
          <time>{data.start_date} ~ {data.end_date}</time>
        </p>
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordionContent"
      >
        <div className="accordionText">
          <div dangerouslySetInnerHTML={{__html:data.content}} />
        </div>
      </div>
    </div>
  )
}

export default BoardItem