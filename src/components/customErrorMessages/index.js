import React from 'react';
import { Text } from 'react-native';

export const validationView = errorMessage => {
  return (
    <React.Fragment>
      <Text>{errorMessage}</Text>
    </React.Fragment>
  );
};

export const JSXErrView = {validationView};
