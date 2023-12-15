"use server";

import axios from "axios";

export const verifyCaptcha = async (token) => {
  const secretKey = process.env.SECRETKEY;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  try {
    await axios.post(url);
    res.status(200).send("success!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed Captcha");
  }
};
