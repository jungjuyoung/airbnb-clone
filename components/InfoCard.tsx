import Image from 'next/image';
import IsearchResults from '../pages/search';
import { HeartIcon } from '@heroicons/react/20/solid';
import { StarIcon } from '@heroicons/react/20/solid';

const InfoCard = ({ img, location, title, description, star, price }) => {
  return (
    <div className='flex'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image src={img} layout='fill' objectFit='cover' alt='infomation' />
      </div>

      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
