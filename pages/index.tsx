import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { isTemplateExpression } from 'typescript';

interface exploreInterface {
  img: string;
  location: string;
  distance: string;
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

export default function Home({
  exploreData,
}: {
  exploreData: exploreInterface;
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
          {exploreData?.map((item, index) => (
            <h1 key={index}>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  // 500 server error maybe cors error I think.... so I don't use this.
  // create an asyn function called getStaticProps and fetch data export it as an object as a return value,
  // you can receive it as a prop in the component function.
  return {
    props: { exploreData },
  };
}
