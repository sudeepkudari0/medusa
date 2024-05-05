import React from 'react';
import { ScaleLoader } from 'react-spinners';

const VerifyingPaymentMessage = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className='flex items-center flex-col justify-center gap-3'>
        <ScaleLoader color="white" />
        <p className="text-center text-lg text-white font-semibold">Please wait, verifying your payment...</p>
      </div>
    </div>
  );
};

export default VerifyingPaymentMessage;
