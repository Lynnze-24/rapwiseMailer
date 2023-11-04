const nodemailer = require('nodemailer');

require('dotenv').config();

function postMail(req, res) {
  if (!req.body.message) {
    return res.status(400).send('Mail content cannot be empty!');
  }

  if (!req.body.email) {
    return res.status(400).send('Email cannot be empty!');
  }

  let subject = 'mail from rapwise website';
  let message = req.body.message;
  let email = req.body.email;

  if (req.body.subject) {
    subject = req.body.subject;
  }

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PW,
    },
  });

  // Send email using the transporter
  transporter.sendMail(
    {
      from: process.env.MAIL_USER,
      to: 'aunghtetlinn.coys@gmail.com',
      // manbox@rapwise.org
      subject: subject,
      html: `<p>${message}</p>
        <p>From ${email}</p>
        `,
    },
    function (error, info) {
      if (error) {
        console.error(error);
        res.status(200).send('error');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email was sent successfully');
      }
    }
  );
}

module.exports = {
  postMail,
};
