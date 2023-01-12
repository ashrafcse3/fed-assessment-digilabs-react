import React from 'react';
import NumberWText from '../shared/NumberWText';
import imgRight from '../../images/top-teams-down/right.png';
import imgLeft from '../../images/top-teams-down/left.png';
import IconWText from '../shared/IconWText';

const Overview = () => {
    return (
        <div className=''>
            <div className='max-w-[1250px] mx-auto relative mt-24 bg-deepurple text-white flex flex-col items-center justify-center rounded-3xl'>
                <div className='font-bold text-5xl leading-7 mt-20 py-4'>
                    <p>A nice and simple</p><br />
                    <p>financial overview</p>
                </div>
                <div className='font-medium leading-3 mt-3 text-gray-300'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br />
                    <p>Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className='mt-16 bg-graypurple grid grid-cols-3 rounded-3xl mb-20 divide-x divide-gray-700'>
                    <NumberWText number='120+' text='Useful widgets' />
                    <NumberWText number='20+' text='Integrations' />
                    <NumberWText number='65+' text='Features out' />
                </div>
                <div>
                    <img className='absolute left-0 top-0' src={imgLeft} alt="img left" />
                    <img className='absolute right-0 bottom-0' src={imgRight} alt="img right" />
                </div>
            </div>
            <div className='mt-36'>
                <div className='flex '>
                    <IconWText text='Event Scheduler' iconColor='bg-digilabs' />
                    <IconWText text='Appointment Scheduler' iconColor='bg-digilabs' />
                    <IconWText text='Mobile Scheduler' iconColor='bg-digilabs' />
                    <IconWText text='Group video calls' iconColor='bg-digilabs' />
                    <IconWText text='Public chat' iconColor='bg-digilabs' />
                </div>
                <div className='flex mt-7'>
                    <IconWText text='Email support' iconColor='bg-green-400' />
                    <IconWText text='Live chat 24/7' iconColor='bg-green-400' />
                    <IconWText text='Activity screen' iconColor='bg-green-400' />
                    <IconWText text='Screen call' iconColor='bg-green-400' />
                    <IconWText text='Whatsapp call' iconColor='bg-green-400' />
                </div>
            </div>
        </div>
    );
};

export default Overview;