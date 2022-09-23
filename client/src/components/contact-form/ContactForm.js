import axios from "axios";
import { useForm } from "react-hook-form";
import Captcha from "components/elements/Captcha";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "components/elements/LoadingSpinner";
import AlertMessage from "components/elements/AlertMessage";
import ModalPortal from "utils/modal/ModalPortal";
import CodeTitle from "components/elements/CodeTitle";
import GeneralContext from "utils/context/GeneralContext";
import { FormattedMessage } from "react-intl";

const ContactForm = () => {
  const { language } = useContext(GeneralContext);

  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    trigger,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      title: "",
      message: "",
    },
  });

  const submitHandler = async (data) => {
    setLoading(true);

    try {
      const res = await axios.post("/api/v1/mail/mail-send", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        title: data.title,
        message: data.message,
      });

      if (res.status === 200) {
        setLoading(false);
        setMessage(true);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(false), 3000);
    }
  }, [message]);

  return loading ? (
    <div className="alignCenter">
      <LoadingSpinner />
    </div>
  ) : (
    <>
      <form onSubmit={handleSubmit(submitHandler)} data-aos="fade-left">
        <CodeTitle title="ask to ITDA" />

        <div className="form-wrap">
          <div className="inputLabel">
            <input
              type="text"
              id="name"
              className={
                watch("name") !== ""
                  ? "active"
                  : errors.name
                  ? "errorBorder"
                  : ""
              }
              autoComplete="off"
              {...register("name", { required: true })}
            />
            <label htmlFor="name">name</label>
            {errors.name && (
              <span className="error">
                <FormattedMessage
                  id="field.required"
                  defaultMessage="*필수 입력 항목입니다."
                />
              </span>
            )}
          </div>

          <div className="inputLabel">
            <input
              type="phone"
              id="phone"
              className={
                watch("phone") !== ""
                  ? "active"
                  : errors.phone
                  ? "errorBorder"
                  : ""
              }
              autoComplete="off"
              {...register("phone", {
                required:
                  language === "en-US"
                    ? "This field is required."
                    : "*필수 입력 항목입니다.",
                pattern: {
                  value: /^[0-9]+$/,
                  message:
                    language === "en-US"
                      ? "Please enter a number"
                      : "숫자만 입력해주세요.",
                },
              })}
            />
            <label htmlFor="phone">phone</label>
            {errors.phone && (
              <span className="error">{errors.phone.message}</span>
            )}
          </div>

          <div className="inputLabel">
            <input
              type="text"
              id="email"
              className={
                watch("email") !== ""
                  ? "active"
                  : errors.email
                  ? "errorBorder"
                  : ""
              }
              autoComplete="off"
              {...register("email", {
                required:
                  language === "en-US"
                    ? "This field is required."
                    : "*필수 입력 항목입니다.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message:
                    language === "en-US"
                      ? "Please check email format."
                      : "이메일 형식이 아닙니다.",
                },
              })}
            />
            <label htmlFor="email">email</label>
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          <div className="inputLabel">
            <input
              type="text"
              id="title"
              className={
                watch("title") !== ""
                  ? "active"
                  : errors.title
                  ? "errorBorder"
                  : ""
              }
              autoComplete="off"
              {...register("title", { required: true })}
            />
            <label htmlFor="title">title</label>
            {errors.title && (
              <span className="error">
                <FormattedMessage
                  id="field.required"
                  defaultMessage="*필수 입력 항목입니다."
                />
              </span>
            )}
          </div>

          <div className="inputLabel">
            <textarea
              id="message"
              className={watch("message") !== "" ? "active" : ""}
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
          {language === "en-US" ? (
            <p>
              Contact form has successfully submitted.
              <br /> We will contact you soon!
            </p>
          ) : (
            <p>
              문의 메일이 정상적으로 발송되었습니다.
              <br />곧 연락드리겠습니다!
            </p>
          )}
        </AlertMessage>
      </ModalPortal>
    </>
  );
};

export default ContactForm;
