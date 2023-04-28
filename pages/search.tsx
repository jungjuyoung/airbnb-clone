import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react';
import { format } from 'date-fns';

const Search = () => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  // console.log(location, startDate, endDate, noOfGuests);
  const formatedStartDate = format(new Date(startDate), 'yy MMMM dd');
  const formatedEndDate = format(new Date(endDate), 'yy MMMM dd');
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
      <Header />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type Of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
