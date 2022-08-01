import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Maps from '../components/Maps';

const Search = ({ searchResult }) => {

  const router = useRouter();

  const { location, startDate, endDate, guests } = router.query;

  // const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  // const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  // const range = `${formattedStartDate} - ${formattedEndDate}`;

  // console.log(startDate, endDate, range);

  return (
    <div className='h-screen'>
      <Header placeholder={`${location} | ${guests}`} />
      <main className=' flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-s '>300+ stays - - for {guests} guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap' >
            <p className='text-gray-500 px-4 py-2 text-xl border bg-gray-50 rounded-full  cursor-pointer  hover:shadow-lg   active:scale-95 active:bg-gray-100 transition duration-150 hover:border ease-out'>Cancellation Flexibility</p>
            <p className='text-gray-500 px-4 py-2 text-xl border-transparent bg-gray-50 rounded-full  cursor-pointer  hover:shadow-lg   active:scale-95 active:bg-gray-100 transition duration-150 hover:border ease-out'>Type of Place</p>
            <p className='text-gray-500 px-4 py-2 text-xl bg-gray-50 rounded-full  cursor-pointer  hover:shadow-lg   active:scale-95 active:bg-gray-100 transition duration-150 hover:border ease-out'>Price</p>
            <p className='text-gray-500 px-4 py-2 text-xl bg-gray-50 rounded-full  cursor-pointer  hover:shadow-lg   active:scale-95 active:bg-gray-100 transition duration-150 hover:border ease-out'>Rooms and Beds</p>
            <p className='text-gray-500 px-4 py-2 text-xl bg-gray-50 rounded-full  cursor-pointer  hover:shadow-lg   active:scale-95 active:bg-gray-100 transition duration-150 hover:border ease-out'>More Filters</p>
          </div>
          <div className='flex flex-col'>

            {searchResult.map(item => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className='hidden lg:inline-flex xl:min-w-[600px]'>
          <Maps searchResult={searchResult} />
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch('https://links.papareact.com/isz').then(res => res.json());

  return {
    props: {
      searchResult,
    },
  }
}