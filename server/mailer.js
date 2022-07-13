const nodeMailer = require('nodemailer')

module.exports = async (name, email, phone, title, message) => {
  const transporter = await nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', // gmail server
    port: 587,
    secure: false,
    auth: {
      user: process.env.REACT_APP_GMAIL_ADDRESS,
      pass: process.env.REACT_APP_GMAIL_PASSWORD,
    }
  });

  const mailOption = {
    from: name,
    to: process.env.REACT_APP_GMAIL_ADDRESS,
    subject: title,
    html: 
      `<p style="font-size: 16px">새로운 문의 메일이 도착했습니다.</p>
      <h3 style="font-size: 20px">문의자 정보</h3>
      <ul style="list-style: none; font-size: 16px;">
        <li style="list-style: none;">이름: ${name}</li>
        <li style="list-style: none;">전화번호: ${phone}</li>
        <li style="list-style: none;">이메일: ${email}</li>
      </ul>
      <h3 style="font-size: 20px;">문의 내용</h3>
      <p style="font-size: 16px; white-space: break-spaces;">${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOption);
    return "success"
  } catch (error) {
    return error
  }
}