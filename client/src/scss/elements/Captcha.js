import { useEffect, useRef, useState } from "react";

let code;

const Captcha = () => {
  const captchaText = useRef();
  const captchaImg = useRef();

  const [validCaptcha, setValidCaptcha] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const createCaptcha = () => {
    captchaImg.current.innerHTML = "";
    const charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyz";
    const lengthOtp = 6;
    const captcha = [];

    for (var i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length + 1); 
        if (captcha.indexOf(charsArray[index]) === -1)
        captcha.push(charsArray[index]);
        else i--;
    }

    const canv = document.createElement("canvas");

    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    const ctx = canv.getContext("2d");
    ctx.font = "25px Handon3gyeopsal600g";

    ctx.strokeText(captcha.join(""), 0, 30);
    code = captcha.join("");

    captchaImg.current.appendChild(canv);
  }

  const validateCaptcha = () => {
    if (captchaText.current.value === code) {
      setErrorMessage("Valid Captcha")
      setValidCaptcha(true)
    }else{
      setErrorMessage("Invalid Captcha");
      setValidCaptcha(false)
    }
  }

  useEffect(() => {
    createCaptcha()
  }, [])

  return (
    <div className="captcha-form">
      <div>
        <div 
          id="captcha"
          className="captcha"
          ref={captchaImg}
        />
        <i
          className="ri-restart-line"
          onClick={() => {
            createCaptcha();
            if(captchaText.current.value !== ""){
              validateCaptcha();
            }
            
          }}
        />
      </div>

      <div className="inputLabel">
        <input 
          type="text" 
          id="cpatchaText"
          ref={captchaText}
          onChange={() => validateCaptcha()}
        />
        <label htmlFor="cpatchaText">
          captcha
        </label>
        <span className={`error active ${validCaptcha ? "blue" : "pink"}`}>
          {errorMessage}
        </span>
      </div>
    </div>
  )
}

export default Captcha