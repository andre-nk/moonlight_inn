import Head from "next/head";
import { FiSearch } from "react-icons/fi";
import { createClient } from "contentful";
import Image from "next/image";
// import Carousel from "../components/carousel";
// import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "resources",
  });

  return {
    props: {
      resources: res.items,
    },
  };
}

export default function Resources({ resources }) {
  return (
    <div>
      <Head>
        <title>Moonlight Inn - Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-24 pb-12 px-10">
        <div className="w-full">
          <form
            className="flex flex-row"
            action="https://tinyletter.com/moonlightinn"
            method="post"
            target="popupwindow"
          >
            <input
              className="bg-white appearance-none border-2 border-gray-100 w-full py-4 px-4 font-body text-gray-700 leading-tight focus:outline-none focus:border-secondary"
              type="email"
              name="email"
              id="tlemail"
              placeholder="Discover your quests (try: Waterdeep)"
            ></input>
            <button
              className="bg-secondary hover:bg-red-800 text-white font-semibold ml-4 px-4 text-sm rounded shadow font-body"
              value="Subscribe"
            >
              <FiSearch size={24} />
            </button>
          </form>
        </div>
        <div className="w-full justify-center">
          <div className="py-8 grid grid-cols-2 lg:grid-flow-row lg:grid-cols-none">
            {resources.map((item, i) => {
              return (
                <div className="col-span-1">
                  <div
                    className="relative flex justify-center self-center shadow-sm hover:drop-shadow-xl"
                    key={i}
                    style={{
                      height: 250,
                      width: 180,
                    }}
                  >
                    <Image
                      layout={"fill"}
                      src={
                        "https:" +
                        item.fields["thumbnail"].fields.file.url
                      }
                    />
                  </div>
                  <div className="py-4">
                      <h3 className="font-medium text-body">{item.fields["title"]}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
