import auth from '@react-native-firebase/auth';

const _createUserWithEmailPassword = (data, successCB, failureCB) => {
  const {emailId, pass} = data;
  auth()
    .createUserWithEmailAndPassword(emailId, pass)
    .then(response => {
      const usersDetails = response.user;
      successCB(usersDetails);
    })
    .catch(errorResponse => {
      failureCB(errorResponse);
    });
};

export const fireBaseFunctions = {_createUserWithEmailPassword};
