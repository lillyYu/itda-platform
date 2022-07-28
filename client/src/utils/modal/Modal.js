import { useEffect } from "react";

export default function Modal ({ 
  show, 
  handleModalShow, 
  children,
  setImgIndex
}) {
  
  useEffect(() => {
    if(show) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [show]);

  return (
    <div className={show ? "modalWrap active" : "modalWrap"}>
      <div
        className="overlay"
        onClick={() => {
          handleModalShow(false);
          setImgIndex(1);
        }}
      />
      <div className="modalContents">
        {children}
      </div>
    </div>
  );
}