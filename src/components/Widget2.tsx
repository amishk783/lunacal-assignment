import React, { useRef, useState } from "react";

type imagesType = {
  id: number;
  url: string;
};

const initalImages: imagesType[] = [
  {
    id: 1,
    url: "/placeholder.png",
  },
  {
    id: 2,
    url: "/placeholder.png",
  },
  { id: 3, url: "/arrow.png" },
  { id: 4, url: "/vite.svg" },
];

export const Widget2 = () => {
  const [images, setImages] = useState(initalImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef(null);

  const addNewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          url: imageUrl,
        },
      ]);
      setCurrentIndex(images.length);
    }
  };
  const handlePrevButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 3);
    }
  };
  const handleNextButton = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  return (
    <div className="w-full xl:w-[720px] gap-5 bg-[#363C43] drop-shadow-2xl  px-3.5 py-4 mt-14 text-xl leading-5 text-center rounded-xl text-zinc-900 text-opacity-80 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col gap-8">
        <div className="flex gap-5 ">
          <div className="py-2">
            <img
              src="public/questionmark.png"
              width={24}
              height={24}
              alt="icon"
            />
          </div>
          <div className="flex text-white justify-between py-2 px-4  w-full gap-10 items-center rounded-3xl max-sm:flex-col">
            <div className="bg-[#171717] py-4 px-4 rounded-md"> Gallery</div>
            <div className="flex items-center gap-4">
              <button
                // onClick={addNewImage}
                className=" relative z-10 py-4 px-4 rounded-3xl bg-[#363C43] shadow-inner shadow-zinc-400 drop-shadow-xl"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={addNewImage}
                  accept="image/*"
                  className="p-0 m-0 absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                />
                + ADD IMAGE{" "}
              </button>

              <div className="flex items-center gap-2 ">
                <button
                  onClick={handlePrevButton}
                  className="flex items-center rounded-full w-8 h-8 bg-gradient-to-b from-[#373E44] to-[#191B1F] justify-center"
                >
                  <img src="public/arrow.png" alt="icon" />
                </button>

                <div
                  onClick={handleNextButton}
                  className="flex items-center rounded-full w-8 h-8 bg-gradient-to-b from-[#373E44] to-[#191B1F] justify-center"
                >
                  <img
                    className=" rotate-180"
                    src="public/arrow.png"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="py-6 w-8">
            <img src="public/boxicon.png" width={24} height={24} alt="icon" />
          </div>

          <div className="w-full overflow-hidden">
            <div className="flex gap-4">
              {visibleImages.map((image, index) => (
                <div key={index}>
                  <img src={image.url} alt="image" width={249} height={149} />
                </div>
              ))}
            </div>
          </div>

          <div className="py-6 w-8">
            <img src="public/boxicon.png" width={24} height={24} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
