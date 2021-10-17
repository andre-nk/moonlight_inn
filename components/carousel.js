import { useState, createRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const arrowStyle = "absolute text-2xl z-10 h-10 w-10 flex items-center justify-center";

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`} className={isLeft ? "ml-28" : "mr-28"}>
        {isLeft ? (
          <BsChevronLeft style={{ color: "black" }}/>
        ) : (
          <BsChevronRight />
        )}
      </span>
    </button>
  );

  return (
    <div className="px-12 mt-8 mb-24 flex justify-center items-center w-screen ">
      <div className="flex justify-center align-bottom">
        <div className="carousel flex items-center w-full">
          {sliderControl(true)}
          {resources.map((img, i) => {
            return (
              <div
                className="flex-shrink-0 w-full self-center pt-4 lg:px-24"
                key={i}
                ref={refs[i]}
              >
                <span className="flex justify-center align-center align-items-center">
                  <div className="relative self-center" style={{
                    height: 355,
                    width: 295
                  }}>
                    <Image
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
                      <div className="py-1.5 px-0.5 mb-6 bg-tertiary w-24 flex justify-center rounded-sm">
                        <p className="text-sm font-semibold font-heading">
                          Favorite
                        </p>
                      </div>
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