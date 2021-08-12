import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/carousel';

export default function Home() {

  const images = [
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
  ];

  return (
    <div className="flex flex-col min-h-screen max-w-full py-0 overflow-hidden bg-white">
      <Head>
        <title>Moonlight Inn - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col align-center justify-center min-w-full min-h-screen -mb-32 relative z-0 lg:flex-row lg:-mb-24 lg:justify-around lg:px-3">
        <div className="self-center">
          <h2 className="font-header font-semibold text-4xl lg:text-5xl lg:text-left text-center">Moonlight Inn.</h2>
          <p className="font-body text-lg leading-8 pt-5 lg:leading-9 lg:text-xl lg:text-left text-center">A curation of <strong> free, epic and definitely critical </strong> <br /> D&D resources for your next campaign.</p>
          <div className="min-w-full hidden justify-center lg:justify-start lg:flex">
            <button className="bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body">
              Discover 100+ resources
            </button>
          </div>
        </div>
        <div className="self-center mt-24 relative lg:hidden overflow-visible">
          <Image src="/mobile-landing.png" height="180px" width="550px" className="top-12 absolute z-0 animate__fadeIn"></Image>
        </div>
        <div className="self-start hidden lg:block">
          <Image src="/landing.png" height="702px" width="600px" className="absolute mr-20 z-0 animate__fadeIn"></Image>
        </div>
      </div>
      <div className="px-8 py-0 top-0 -m-1 min-w-full bg-primary relative lg:py-10">
        <div className="min-w-full mt-4 mb-10 flex justify-center lg:justify-start lg:hidden">
            <button className="bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body">
              Discover 100+ resources
            </button>
          </div>
        <h2 className="text-2xl px-10 pt-10 pb-0 lg:pt-0 font-header font-semibold">Featured Resources</h2>
        <div>
          <Carousel/>
        </div>
      </div>
      <div className="min-w-full flex bg-primary justify-center" data-aos="fade-up">
        <div className="pt-8 pb-24 flex-column">
          <div className="flex justify-center">
            <Image src="/chest.png" height="180px" width="142px"></Image>
          </div>
          <h2 className="font-header text-3xl font-semibold mt-8 mb-4 text-center">Support Us!</h2>
          <p className="font-body text-md mb-2 text-center mx-64 leading-8"><strong>Moonlight Inn</strong> is a passionate Indonesia-based D&D community that offers a vast amount of <strong>free and definitely epic</strong> D&D resources such as extended campaign from the WoTC resource, homebrew adventures, and even more homebrew classes, monsters, etc. Some little donations would be a <strong>perfect roll-20</strong> for growing this community, keeping up this server and in the end, keeping us to sharing exclusive resources for free. Nevertheless, supporting this community by <strong>simply use our resources and connect with us below</strong> is definitely a hit.</p>
          <a className="flex justify-center py-6" href="https://www.buymeacoffee.com/fullstackdre" target="_blank"><Image height="57.5px" width="207px" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"/></a>
        </div>
      </div>
      <div className="w-full h-96 bg-email bg-no-repeat bg-cover flex justify-start items-center">
        <div className="bg-primary w-1/2 h-80 my-8 pl-16 relative z-0 flex items-center">
          <div className="flex-column justify-center">
            <p className="text-2xl font-semibold font-heading pl-1">Subscribe to our newsletter!</p>
            <p className="text-md font-body pt-3 pb-5 leading-6 pl-1">Get updated for our <strong>brand-new D&D resource releases,</strong> <br/>and community updates right into your e-mail inbox</p>
            <div className="flex">
              <input class="bg-white appearance-none border-2 border-gray-100 w-full my-2 py-4 px-4 font-body text-gray-700 leading-tight focus:outline-none focus:border-secondary" id="inline-full-name" type="text" placeholder="Enter your e-mail address here..."></input>
            </div>
            <div className="min-w-full hidden justify-center lg:justify-start lg:flex">
              <button className="bg-secondary hover:bg-red-800 text-white mt-4 font-semibold py-2.5 px-4 text-sm rounded shadow font-body">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
