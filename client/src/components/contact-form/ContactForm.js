import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Captcha from "scss/elements/Captcha";

const ContactForm = () => {
  const [valid, setValid] = useState(false);

  const { register, setError, trigger, handleSubmit, watch, formState: { errors } } = useForm( { mode: "onBlur"});

  const submitHandler = async (data) => {
    console.log(data);

    try {
      const res = await axios.post('/mail', {
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          title: data.title,
          message: data.message
        }
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h3>
        &#60; <span>div</span> <span>className</span> <span> ='ask to ITDA'</span> &#47;&#62;
      </h3>

      <div className="form-wrap">
        <div className="inputLabel">
          <input 
            type="text" 
            id="name"
            className={errors.name ? "errorBorder" : undefined}
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
            className={errors.phone ? "errorBorder" : undefined}
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
            className={errors.email ? "errorBorder" : undefined}
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
            className={errors.title ? "errorBorder" : undefined}
            autoComplete="off"
            {...register("title", { required: true })}
          />
          <label htmlFor="title">title</label>
          {errors.title && <span className="error">*필수 입력 항목입니다.</span>}
        </div>

        <div className="inputLabel">
          <textarea 
            id="message"  
            {...register("message")}
          />
          <label htmlFor="message">other message</label>
        </div>
      </div>

      <Captcha 
        register={register}
        errors={errors}
        trigger={trigger}
      />

      <div className="alignCenter">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  )
}

export default ContactForm