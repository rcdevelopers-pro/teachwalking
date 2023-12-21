import nodemailer from "nodemailer";

// Use when officail email enabled
// import sgTransport from "nodemailer-sendgrid-transport";

const toEmail = process.env.TOEMAIL;
const passKey = process.env.KEYOFEMAIL;
const transporter = {
  service: "gmail",
  auth: {
    // Update here your SendGrid API key
    user: toEmail,
    pass: passKey,
  },
};

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  const { name, email, number, subject, text } = req.body;
  const data = {
    // Update here your email
    to: toEmail,
    from: email,
    subject: subject,
    text: text,
    html: `
            <b>From:</b> ${name} <br />
            <b>Number:</b> ${number} <br />
            <b>Message:</b> ${text}
        `,
  };

  const requestMethod = req.method;
  switch (requestMethod) {
    case "POST":
      try {
        await mailer.sendMail(data);
        res.status(200).send("Email send successfully");
      } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
      }
    // handle other HTTP methods
    default:
      res.status(200).json({ message: "Welcome to API Routes!" });
  }
};
