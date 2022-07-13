import ReactDOM from "react-dom";

export default function ModalPortals({ children }) {
  const modalElement = document.querySelector("#modal");
  return ReactDOM.createPortal(children, modalElement);
  
}