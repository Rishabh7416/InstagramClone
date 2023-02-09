import regex from './regex';

export const emailValidation = (values, callback) => {
  if (regex.validatingEmail.test(values)) {
    callback(true);
  } else {
    callback(false);
  }
};

export const validations = {emailValidation};
