import React from 'react';
import QRCode from 'react-native-qrcode-svg';

const QRComponent = ({value, getRef, size}) => {
  return (
    <QRCode
      value={value}
      size={size}
      color="black"
      backgroundColor="white"
      getRef={getRef}
    />
  );
};

export default QRComponent;
