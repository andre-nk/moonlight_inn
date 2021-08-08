import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
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
        <div className="self-center pt-8 relative lg:hidden overflow-visible">
          <Image src="/mobile-landing.png" height="180px" width="550px" className="absolute z-0 animate__fadeIn"></Image>
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
        <h2 className="text-2xl font-header font-semibold">Featured Resources</h2>
      </div>
    </div>
  )
}
