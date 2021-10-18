import Head from "next/head";
import { FiSearch } from "react-icons/fi";
import { createClient } from "contentful";
import { ResourceCard } from "../../components/resource-card";

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
    revalidate: 1
  };
}

export default function Resources({ resources }) {
  return (
    <div>
      <Head>
        <title>Moonlight Inn - Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-24 pb-20 px-24">
        <div className="w-full justify-center">
          <div className="py-8 lg:pb-20 grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 md:grid-cols-3 lg:grid-cols-5">
            {resources.map((item, i) => {
              return (
                <ResourceCard item={item} index={i}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
