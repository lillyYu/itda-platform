
export default function Modal ({ 
  show, 
  handleModalShow, 
  children,
  setImgIndex
}) {
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