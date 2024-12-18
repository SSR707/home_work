import * as otpGenerator from 'otp-generator';

export const generateOtp = () => {
  const otp = otpGenerator.generat(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  return otp;
};
