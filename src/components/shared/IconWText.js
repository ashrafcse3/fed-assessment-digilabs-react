import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const IconWText = ({ text, iconColor }) => {
    return (
        <div className='flex mr-14'>
            <CheckIcon className={`${iconColor} h-6 text-white p-1 rounded-2xl mr-3`} />
            <p className='font-medium text-sm'>{text}</p>
        </div>
    );
};

export default IconWText;