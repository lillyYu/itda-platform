import { useContext, useEffect, useRef } from "react";
import GeneralContext from "utils/context/GeneralContext";

let code;

const Captcha = ({register, errors, trigger, watch}) => {
  const {language} = useContext(GeneralContext)
  const captchaImg = useRef();

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
          onClick={ async () => {
            createCaptcha();
            await trigger("cpatchaText");
          }}
        />
      </div>

      <div className="inputLabel">
        <input 
          type="text" 
          id="cpatchaText"
          autoComplete="off"
          className={
            watch('cpatchaText') !== "" ? "active" : errors.cpatchaText ? "errorBorder" : ""
          }
          {...register("cpatchaText", {
            required:"*필수 입력 항목입니다.", 
            validate: {
              value: (v) => v === code || language === "ko" ? "코드가 일치하지 않습니다." : "Code is not matched"
            }
          }
          )}
        />
        <label htmlFor="cpatchaText">captcha</label>
        {errors.cpatchaText && <span className="error">{errors.cpatchaText.message}</span>}
      </div>
    </div>
  )
}

export default Captcha