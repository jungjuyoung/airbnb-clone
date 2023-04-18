import React from 'react';

export const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>Airbnb</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Love</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessbility</p>
        <p>This is not a real site</p>
        <p>its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>nadia studying</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Nadia</p>
        <p>Presents</p>
        <p>Zero to full stack hero</p>
        <p>hundreds of students</p>
        <p>Join now</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi</p>
        <p>Easter Eggs</p>
        <p>For the win</p>
      </div>
    </div>
  );
};
