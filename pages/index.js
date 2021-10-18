import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";
import { createClient } from "contentful";
import Router from "next/router";
import Link from "next/link";

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
    revalidate: 1,
  };
}

export default function Home({ resources }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full py-0 overflow-hidden bg-white">
      <Head>
        <title>Moonlight Inn - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col align-center justify-center min-h-screen relative z-0 lg:mx-24 lg:flex lg:flex-row">
        <div className="self-center -mt-4 lg:mt-0 lg:self-center lg:relative">
          <h2 className="font-header font-semibold text-4xl lg:text-5xl lg:text-left text-center">
            Moonlight Inn.
          </h2>
          <p className="font-body text-lg leading-8 pt-5 px-12 lg:px-0 lg:leading-9 lg:text-xl lg:text-left text-center">
            A curation of <strong> free, epic and definitely critical </strong>{" "} D&D resources for your next campaign.
          </p>
          <div className="min-w-full hidden justify-center lg:justify-start lg:flex">
            <button
              className="bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body"
              onClick={() => Router.push("/resources")}
            >
              Discover 100+ resources
            </button>
          </div>
        </div>

        {/*Landing SM*/}
        <div className="self-center mt-8 relative lg:hidden">
          <Image
            src="/mobile-landing.png"
            height="180px"
            width="550px"
            className="top-12 absolute z-0 animate__fadeIn"
          ></Image>
        </div>

        {/*Landing LG*/}
        <div className="hidden lg:block self-center relative ml-16">
          <Image src="/landing.png" height="702px" width="600px"></Image>
        </div>
      </div>

      <div className="-mt-32 lg:-mt-16 min-w-full bg-primary relative">
        <div className="min-w-full pt-4 mb-10 flex justify-center lg:justify-start lg:hidden">
          <button
            className="bg-secondary hover:bg-red-800 text-white mt-6 font-semibold py-3.5 px-6 rounded shadow font-body"
            onClick={() => Router.push("/resources")}
          >
            Discover 100+ resources
          </button>
        </div>
        <h2 className="text-2xl px-8 pt-12 lg:px-12 lg:pt-12 font-header font-semibold">
          Featured Resources
        </h2>
        <div>
          <Carousel resources={resources.slice(0, 3)} />
        </div>
      </div>

      <div className="min-w-full flex bg-primary justify-center">
        <div className="pb-24 flex-column" id="support">
          <div className="flex justify-center">
            <Image src="/chest.png" height="180px" width="142px"></Image>
          </div>
          <h2 className="font-header text-3xl font-semibold mt-8 mb-4 text-center">
            Support Us!
          </h2>
          <p className="font-body text-md mb-2 text-center px-8 lg:mx-32 leading-8">
            <strong>Moonlight Inn</strong> is a passionate Indonesia-based D&D
            community that offers a vast amount of{" "}
            <strong>free and definitely epic</strong> D&D resources such as
            extended campaign from the WoTC resource, homebrew adventures, and
            even more homebrew classes, monsters, etc. Some little donations
            would be a <strong>perfect roll-20</strong> for growing this
            community, keeping up this server and in the end, keeping us to
            sharing exclusive resources for free. Nevertheless, supporting this
            community by{" "}
            <strong>simply use our resources and connect with us below</strong>{" "}
            is definitely a hit.
          </p>
          <div
            className="flex flex-row flex-shrink-0 justify-center mt-8 cursor-pointer"
            onClick={() =>
              window.open("https://www.buymeacoffee.com/fullstackdre")
            }
          >
            <Image
              height="57.5px"
              width="207px"
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:flex lg:flex-row-reverse">
        <div
          className="relative z-0 w-full lg:w-1/2 lg:h-80 h-44 flex self-center"
        >
          <Image layout={"fill"} src="/wallpaper.png" />
        </div>
        <div className="bg-primary w-full py-8 px-8 flex justify-center items-center z-10 lg:w-1/2 lg:relative">
          <div className="flex-column justify-center">
            <p className="text-2xl font-semibold font-heading pl-1">
              Subscribe to our newsletter!
            </p>
            <p className="text-md font-body pt-3 pb-5 leading-6 pl-1">
              Get updated for our brand-new D&D resource releases, and community
              updates right into your e-mail inbox
            </p>
            <div className="w-full">
              <form
                action="https://tinyletter.com/moonlightinn"
                method="post"
                target="popupwindow"
                onSubmit="{window.open('https://tinyletter.com/moonlightinn', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true}"
              >
                <input
                  className="bg-white appearance-none border-2 border-gray-100 w-full my-2 py-4 px-4 font-body text-gray-700 leading-tight focus:outline-none focus:border-secondary"
                  type="email"
                  name="email"
                  id="tlemail"
                  placeholder="Drop your e-mail address here..."
                ></input>
                <div className="min-w-full flex justify-center lg:justify-start">
                  <button
                    className="bg-secondary hover:bg-red-800 text-white mt-4 font-semibold py-2.5 px-8 lg:px-4 text-sm rounded shadow font-body"
                    value="Subscribe"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
