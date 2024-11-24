import { createTransport } from "nodemailer";
import { config } from "../../config/index.js";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: config.email.user,
    pass: config.email.passwrod,
  },
});

export const sendMail = async (to, subject, html) => {
  const info = await transporter.sendMail({
    from: config.email.user,
    to,
    subject,
    html,
  });
};
