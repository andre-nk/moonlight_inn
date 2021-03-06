import { createClient } from "contentful";
import Image from "next/dist/client/image";
import Head from "next/dist/shared/lib/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CustomLoader from "../../components/custom_loader";
import download from "downloadjs";
import { useRouter } from "next/dist/client/router";
import { RWebShare } from "react-web-share";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "resources",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "resources",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { resources: items[0] },
    revalidate: 1,
  };
};

export default function ResourcesDetails({ resources }) {
  const { asPath } = useRouter();
  if (!resources) return <CustomLoader />;

  console.log(resources);

  return (
    <div>
      <Head>
        <meta
          name={resources.fields["title"]}
          content="Moonlight Inn's official homebrew resources"
        />
        <html lang="en"></html>
        <title>{resources.fields["title"]}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-64 lg:h-96 overflow-hidden relative">
        <Image
          alt="cover"
          layout="fill"
          className="w-full object-cover"
          src={"https:" + resources.fields["cover"].fields.file.url}
          galleryimg="no" 
        />
      </div>
      <div className="w-full flex relative -mt-24 justify-center lg:justify-center lg:px-24">
        {/*SM - MD*/}
        <div
          className="relative flex self-center lg:hidden shadow-xl"
          style={{
            height: 180,
            width: 130,
          }}
        >
          <Image
            alt="thumbnail"
            layout={"fill"}
            src={"https:" + resources.fields["thumbnail"].fields.file.url}
            galleryimg="no" 
          />
        </div>

        {/*LG - XL*/}
        <div className="align-baseline hidden lg:flex lg:justify-end">
          <div
            className="relative self-center hidden lg:flex lg:flex-row shadow-xl"
            style={{
              height: 300,
              width: 220,
            }}
          >
            <Image
              alt="thumbnail"
              layout={"fill"}
              src={"https:" + resources.fields["thumbnail"].fields.file.url}
              galleryimg="no" 
            />
          </div>
          <div className="h-full pl-12 pt-32">
            <h2 className="text-4xl pb-4 font-semibold">
              {resources.fields["title"]}
            </h2>
            <h2 className="text-xl pb-8 font-body">
              author: {resources.fields["author"]}
            </h2>
            <div className="self-center text-center flex flex-row">
              {resources.fields["contentType"].map((item, i) => {
                return (
                  <div
                    className={
                      resources.fields["contentType"].length > 1
                        ? resources.fields["contentType"].length == i
                          ? "text-center px-4 py-2 mb-6 bg-tertiary text-sm"
                          : "text-center px-4 py-2 mb-6 mr-3 bg-tertiary text-sm"
                        : "text-center px-4 py-2 mb-6 bg-tertiary text-sm"
                    }
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/*SM - MD*/}
      <div className="relative flex flex-col px-8 pt-10 pb-10 lg:hidden">
        <h2 className="self-center text-center text-2xl font-semibold pb-1.5">
          {resources.fields["title"]}
        </h2>
        <h2 className="self-center text-center pb-4 font-body text-md">
          author: {resources.fields["author"]}
        </h2>
        <div className="self-center text-center flex flex-row">
          {resources.fields["contentType"].map((item, i) => {
            return (
              <div
                className={
                  resources.fields["contentType"].length > 1
                    ? resources.fields["contentType"].length == i
                      ? "text-center px-3 py-1.5 mb-6 bg-tertiary text-xs"
                      : "text-center px-3 py-1.5 mb-6 mr-3 bg-tertiary text-xs"
                    : "text-center px-3 py-1.5 mb-6 bg-tertiary text-xs"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        <p className="self-center text-center text-md font-light">
          {documentToReactComponents(resources.fields["resourcesDetails"])}
        </p>
        <div className="w-full flex justify-between mt-10">
          <RWebShare
            data={{
              text: "Adventurers! Check out this hot homebrew D&D resources only from Moonlight Inn",
              url: "https://moonlight-inn.vercel.app/" + asPath,
              title: resources.fields["title"],
            }}
          >
            <button className="bg-transparent hover:bg-tertiary text-black border border-black hover:border-transparent duration-200 py-3 mr-2 text-md flex-1">
              Share material
            </button>
          </RWebShare>
          {resources.fields["resourceFile"] == null ? (
            <div></div>
          ) : (
            <button
              className="bg-secondary hover:bg-red-800 text-white py-3 ml-2 text-md shadow flex-1"
              onClick={() => {
                if (resources.fields["resourceFile"] == null) {
                  console.error("File doesn't exist");
                } else {
                  var url = resources.fields["resourceFile"].fields["file"].url;
                  if (url.slice(0, 2) === "//") {
                    console.log(`https:${url}`);
                    download(`https:${url}`);
                  } else if (url.slice(0, 4) === "http") {
                    console.log(url);
                    download(url);
                  }
                }
              }}
            >
              Download material
            </button>
          )}
        </div>
      </div>

      {/*LG - XL*/}
      <div className="relative hidden lg:flex lg:flex-col justify-center py-12 px-72">
        <p className="self-center text-center text-lg font-light">
          {documentToReactComponents(resources.fields["resourcesDetails"])}
        </p>
        <div className="w-full flex justify-between mt-10">
          <RWebShare
            data={{
              text: "Adventurers! Check out this hot homebrew D&D resources only from Moonlight Inn",
              url: "https://moonlight-inn.vercel.app/" + asPath,
              title: resources.fields["title"],
            }}
          >
            <button className="bg-transparent hover:bg-tertiary text-black border border-black hover:border-transparent duration-200 py-3 mr-2 text-md flex-1">
              Share material
            </button>
          </RWebShare>
          {resources.fields["resourceFile"] == null ? (
            <div></div>
          ) : (
            <button
              className="bg-secondary hover:bg-red-800 text-white py-3 ml-4 text-md shadow flex-1"
              onClick={() => {
                if (resources.fields["resourceFile"] == null) {
                  console.error("File doesn't exist");
                } else {
                  var url = resources.fields["resourceFile"].fields["file"].url;
                  if (url.slice(0, 2) === "//") {
                    console.log(`https:${url}`);
                    download(`https:${url}`);
                  } else if (url.slice(0, 4) === "http") {
                    console.log(url);
                    download(url);
                  }
                }
              }}
            >
              Download material
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
