import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LargeCard } from '@/components/LargeCard';
import { MediumCard } from '@/components/MediumCard';
import { SmallCard } from '../components/SmallCard';

interface exploreInterface {
  img: string;
  location: string;
  distance: string;
}
interface cardsFetchInterface {
  img: string;
  title: string;
}

const exploreData: Array<exploreInterface> = [
  {
    img: 'https://links.papareact.com/5j2',
    location: 'London',
    distance: '45-minute drive',
  },
  {
    img: 'https://links.papareact.com/1to',
    location: 'Manchester',
    distance: '4.5-hour drive',
  },
  {
    img: 'https://links.papareact.com/40m',
    location: 'Liverpool',
    distance: '4.5-hour drive',
  },
  {
    img: 'https://links.papareact.com/msp',
    location: 'York',
    distance: '4-hour drive',
  },
  {
    img: 'https://links.papareact.com/2k3',
    location: 'Cardiff',
    distance: '45-minute drive',
  },
  {
    img: 'https://links.papareact.com/ynx',
    location: 'Birkenhead',
    distance: '4.5-hour drive',
  },
  {
    img: 'https://links.papareact.com/kji',
    location: 'Newquay',
    distance: '6-hour drive',
  },
  {
    img: 'https://links.papareact.com/41m',
    location: 'Hove',
    distance: '2-hour drive',
  },
];
const cardsData: Array<cardsFetchInterface> = [
  { img: 'https://links.papareact.com/2io', title: 'Outdoor getaways' },
  { img: 'https://links.papareact.com/q7j', title: 'Unique stays' },
  { img: 'https://links.papareact.com/s03', title: 'Entire homes' },
  { img: 'https://links.papareact.com/8ix', title: 'Pet allowed' },
];

export default function Home({
  exploreData,
  cardsData,
}: {
  exploreData: exploreInterface;
  cardsData: cardsFetchInterface;
}) {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(
              ({ img, distance, location }: exploreInterface) => (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              )
            )}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }: cardsFetchInterface) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoor'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  // 500 server error maybe cors error I think.... so I don't use this.
  // create an asyn function called getStaticProps and fetch data export it as an object as a return value,
  // you can receive it as a prop in the component function.

  // const cardsData = await fetch('https://links.papareact.com/zp1').then(res =>
  //   res.json()
  // );

  return {
    props: { exploreData, cardsData },
  };
}
