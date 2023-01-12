import React from 'react';
import leftImg from '../../images/top-teams/lake-left.png';
import invertImg from '../../images/top-teams/invert.png';
import hitechImg from '../../images/top-teams/hitech.png';
import flashImg from '../../images/top-teams/flash.png';
import prolineImg from '../../images/top-teams/proline.png';
import rightImg from '../../images/top-teams/sno-right.png';

const BrandNames = () => {
    return (
        <div className='mt-32 max-w-[1350px] mx-auto'>
            <p className='text-xl text-center'>Trusted and loved by the world’s best teams</p>
            <div className='grid grid-cols-7 mt-8'>
                <p></p>
                <img src={leftImg} alt="imagee 1" />
                <img src={invertImg} alt="imageee 2" />
                <img src={hitechImg} alt="imageee 3" />
                <img src={flashImg} alt="imageee 4" />
                <img src={prolineImg} alt="imageee 5" />
                <img src={rightImg} alt="imageee 6" />
            </div>
        </div>
    );
};

export default BrandNames;