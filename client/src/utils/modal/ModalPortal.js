import ReactDOM from "react-dom";

export default function ModalPortal({ children }) {
  const modalElement = document.querySelector("#modal");
  return ReactDOM.createPortal(children, modalElement);
  
}