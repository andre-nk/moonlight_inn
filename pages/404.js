import Image from "next/image";
import Router from "next/router";
import Head from "next/head";

export default function NotFound() {
  return (
    <div className="h-full flex-shrink-0 relative flex flex-col pt-44 pb-40 justify-center">
      <Head>
        <meta name="not_found" content="Not found page in Moonlight Inn" />
        <html lang="en"></html>
        <title>Moonlight Inn - Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="self-center">
        <Image alt="compass" src="/404_illustration.png" height="200px" width="200px"></Image>
      </div>
      <h2 className="self-center pt-8 pb-2 font-body font-semibold text-xl">
        You seems lost, traveler...
      </h2>
      <p className="self-center font-body text-md">
        may the Guidance Spell help you out from this one
      </p>
      <div className="self-center pt-10">
        <button
          className="bg-secondary hover:bg-red-800 text-white font-lg text-sm py-3 px-6 rounded shadow"
          onClick={() => {
            Router.push("/");
          }}
        >
          Let's roll the d20
        </button>
      </div>
    </div>
  );
}
