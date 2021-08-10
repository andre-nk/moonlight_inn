import { useState, createRef } from "react";
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs'

// images must be an array of urls , if using Next JS this could something like
const images = ['/item-1.png', '/item-2.jpg', '/item-3.jpg', '/item-4.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
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

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-2xl z-10 h-10 w-10 flex items-center justify-center';

  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? <BsChevronLeft style={{color: "black"}}/> : <BsChevronRight/>}
      </span>
    </button>
  );

  return (
    <div className="p-12 inline-flex justify-center w-screen items-center ">
      <div className="relative w-full">
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="flex-shrink-0 w-full self-center px-0 lg:px-36" key={img} ref={refs[i]}>
              <span className="flex justify-center align-center lg:justify-start">
                <img src={img} className="w-64 lg:pl-18" />  
                <div className="hidden pl-0 lg:flex">
                    <div className="flex-column justify-center align-middle max-w-3xl pl-20">
                        <h2 className="text-2xl text-black font-semibold font-header pb-4">Waterdeep: The Long Trolltide</h2>
                        <div className="px-1 py-2 mb-6 bg-tertiary w-24 flex justify-center rounded-sm">
                            <p className="text-sm font-semibold font-heading">Favorite</p>
                        </div>
                        <p className="text-md text-black font-body hidden lg:flex align-center break-words">Waterdeep: The Long Trolltide is an epic campaign adventures that take place on the great city of Waterdeep. The story focuses on players as a enforcer known as The City Watch, where they will be faced to a brilliant criminal mastermind that has been going around for 3 months.  Will justice prevail in these such indecent times? </p>
                        <button className="bg-secondary hover:bg-red-800 text-white mt-6 py-2 px-4 rounded shadow font-body">
                            <p className="text-sm">Read more</p>
                        </button>
                    </div>
                </div>
              </span>
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default Carousel;