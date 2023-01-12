import React from 'react';

const NumberWText = ({ number, text }) => {
    return (
        <div className='p-7 text-center'>
            <h1 className='font-bold text-3xl'>{number}</h1>
            <p className='text-sm text-gray-300'>{text}</p>
        </div>
    );
};

export default NumberWText;