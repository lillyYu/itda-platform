const express = require('express');
const mailer = require('./mailer');
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// 메일 전송 라우트
app.post("/mail", (req, res) => {
  const { name, email, phone, title, message } = req.body.data;

  mailer(name, email, phone, title, message)
    .then((response) => {
      if (response === "success") {
        res.status(200).json({
          status: 'Success',
          code: 200,
          message: 'Message Sent Successfully!',
        })
    } else {
      res.json({
        status: 'Fail',
        code: response.code
      })
    }
  })
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
