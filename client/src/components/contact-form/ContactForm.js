import axios from "axios";
import { useForm } from "react-hook-form";
import Captcha from "components/elements/Captcha";
import { useEffect, useState } from "react";
import LoadingSpinner from "components/elements/LoadingSpinner";
import AlertMessage from "components/elements/AlertMessage";
import ModalPortal from 'utils/modal/ModalPortal';

const ContactForm = () => {
  const [message, setMessage] = useState(true);
  const [loading, setLoading] = useState(false);

  const { register, trigger, handleSubmit, reset, watch, formState: { errors } } = useForm( { mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      titile: "",
      message: ""
    }
  });

  const submitHandler = async (data) => {
    setLoading(true)

    try {
      const res = await axios.put('/mail-send', {
        name: data.name,
        phone: data.phone,
        email: data.email,
        title: data.title,
        message: data.message
      })

      if(res.status === 200){
        setLoading(false);
        reset();
        alert("문의 글 발송 완료");
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 3000);
    }
  }, [message]);

  return (
    loading ? <div className="alignCenter"><LoadingSpinner /></div>
    :
    <>
      <form onSubmit={handleSubmit(submitHandler)} data-aos="fade-left">
        <h3>
          &#60; <span>div</span> <span>className</span> <span> ='ask to ITDA'</span> &#47;&#62;
        </h3>
  
        <div className="form-wrap">
          <div className="inputLabel">
            <input 
              type="text" 
              id="name"
              className={
                watch('name') !== "" ? "active" : errors.name ? "errorBorder" : ""
              }
              autoComplete="off"
              {...register("name", { required: true })}
            />
            <label htmlFor="name">name</label>
            {errors.name && <span className="error">*필수 입력 항목입니다.</span>}
          </div>
  
          <div className="inputLabel">
            <input 
              type="phone" 
              id="phone"
              className={
                watch('phone') !== "" ? "active" : errors.phone ? "errorBorder" : ""
              }
              autoComplete="off"
              {...register("phone", {
                required:"*필수 입력 항목입니다.", 
                pattern:{
                  value: /^[0-9]+$/, 
                  message:"숫자만 입력해주세요."}})
                } 
            />
            <label htmlFor="phone">phone</label>
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>
  
          <div className="inputLabel">
            <input 
              type="text" 
              id="email"
              className={
                watch('email') !== "" ? "active" : errors.email ? "errorBorder" : ""
              }
              autoComplete="off"
              {...register("email", {
                required:"*필수 입력 항목입니다.", 
                pattern:{
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
                  message:"이메일 형식이 아닙니다."}})
                } 
            />
            <label htmlFor="email">email</label>
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
  
          <div className="inputLabel">
            <input 
              type="text" 
              id="title"
              className={
                watch('title') !== "" ? "active" : errors.title ? "errorBorder" : ""
              }
              autoComplete="off"
              {...register("title", { required: true })}
            />
            <label htmlFor="title">title</label>
            {errors.title && <span className="error">*필수 입력 항목입니다.</span>}
          </div>
  
          <div className="inputLabel">
            <textarea 
              id="message"
              className={
                watch('message') !== "" ? "active" : ""
              }
              {...register("message")}
            />
            <label htmlFor="message">other message</label>
          </div>
        </div>
  
        <Captcha 
          register={register}
          errors={errors}
          trigger={trigger}
          watch={watch}
        />
  
        <div className="alignCenter">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      <ModalPortal>
        <AlertMessage show={message}>
          문의 메일이 정상적으로 발송되었습니다. 곧 연락드리겠습니다!
        </AlertMessage>
      </ModalPortal>
    </>
  )
}

export default ContactForm