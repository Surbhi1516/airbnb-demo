import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MeduimCard from '../components/MeduimCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Sections */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 '>Explore Yourself</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-50 shadow-md px-5 py-5'>
            {exploreData?.map(item => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>

        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 bg-gray-50 px-10 py-10 shadow-md '>
            {cardsData?.map(item => (
              <MeduimCard
                key={item.img}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>


        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb'
          buttonText='Get Inspired'
        />

      </main>

      <Footer />

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());

  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  }

}