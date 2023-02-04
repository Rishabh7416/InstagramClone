import React from 'react';
import Modal from 'react-native-modal';

export default function CustomModalWrapper({...props}) {
  const visibilityHandler = () => {
    props?.onBackDropPress();
  };

  return (
    <Modal
      useNativeDriver
      style={[{marginVertical: 0}, props?.modalStyle]}
      isVisible={props?.visibility}
      hasBackdrop={true}
      onBackdropPress={visibilityHandler}
      onBackButtonPress={visibilityHandler}
      {...props}>
      {props?.children}
    </Modal>
  );
}
