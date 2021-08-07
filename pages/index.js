import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Moonlight Inn - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex align-start justify-between min-w-full px-32 -mb-24 relative z-0">
        <div className="mr-20 self-center">
          <h2 className="font-header font-semibold text-5xl">Moonlight Inn.</h2>
          <p className="font-body text-xl pt-5 leading-9">A curation of <strong> free, epic and definitely critical </strong> <br /> D&D resources for your next campaign.</p>
          <button class="bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body">
            Discover 100+ resources
          </button>
        </div>
        <div className="self-start">
          <Image src="/landing.png" height="702px" width="600px" className="absolute mr-20 z-0 animate__fadeIn"></Image>
        </div>
      </div>
      <div className="flex flex-row px-28 py-20 top-0 -m-1 min-w-full bg-primary relative">
        <h2 className="text-3xl font-header font-semibold">Featured Resources</h2>
      </div>
    </div>
  )
}
