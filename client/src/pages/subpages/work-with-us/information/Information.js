import AlertMessage from "components/elements/AlertMessage"
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard"
import ModalPortal from "utils/modal/ModalPortal"

const Information = () => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 3000);
    }
  }, [message]);

  return (
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
  )
}

export default Information