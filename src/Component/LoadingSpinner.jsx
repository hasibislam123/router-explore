import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-287px)]'>
            <HashLoader />
        </div>
    );
};

export default LoadingSpinner;