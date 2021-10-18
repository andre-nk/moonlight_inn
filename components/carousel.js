import { useState, createRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from 'next/router'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Carousel = ({ resources }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const refs = resources.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = resources.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const arrowStyle = "absolute text-2xl h-10 w-10 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`} className={isLeft ? "ml-6 lg:ml-24" : "mr-6 lg:mr-24"}>
        {isLeft ? (
          <BsChevronLeft style={{ color: "black" }}/>
        ) : (
          <BsChevronRight />
        )}
      </span>
    </button>
  );

  return (
    <div className="mt-8 mb-24 flex justify-center items-center w-screen ">
      <div className="flex justify-center align-bottom">
        <div className="carousel flex items-center w-full">
          {sliderControl(true)}
          {resources.map((img, i) => {
            return (
              <div
                className="flex-shrink-0 w-full self-center pt-4 px-24 px- lg:px-24"
                key={i}
                ref={refs[i]}
              >
                <span className="flex justify-center align-center align-items-center">
                  <div 
                    className="relative self-center transition duration-200 ease-in-out transform hover:scale-105 hover:drop-shadow-xl" 
                    style={{
                      height: 325,
                      width: 265
                    }}
                    onClick={() => Router.push(`/resources/${resources[i].fields["slug"]}`)}  
                  >
                    <Image
                      alt="thumbnail"
                      layout={'fill'}
                      objectFit={'contain'}
                      src={
                        "https:" + resources[i].fields["thumbnail"].fields.file.url
                      }
                    />
                  </div>
                  <div className="hidden pl-0 lg:flex self-center">
                    <div className="flex-column justify-center align-middle max-w-3xl pl-20">
                      <h2 className="text-2xl text-black font-semibold font-header pb-4">
                        {resources[i].fields["title"]}
                      </h2>
                      <p className="text-md text-black font-body hidden lg:flex align-center break-words">
                        {documentToReactComponents(resources[i].fields["resourcesDetails"])}
                      </p>
                      <button className="bg-secondary hover:bg-red-800 text-white mt-6 py-2 px-4 rounded shadow font-body">
                        <Link href={"resources/" + resources[i].fields.slug}>
                          <p className="text-sm">Read more</p>
                        </Link>
                      </button>
                    </div>
                  </div>
                </span>
              </div>
            );
          })}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;