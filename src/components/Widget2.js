'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import questionmark from '../../public/questionmark.svg';
import sixSquares from '../../public/sixSquares.svg';
import leftArrow from '../../public/leftarrow.svg';
import rightArrow from '../../public/rightarrow.svg';
import plus from '../../public/plus.svg';

const imageListGlobal = [
  '/sample1.png',
  '/sample2.png',
  '/sample3.png',
];

export default function Widget2() {
  const [imageList, setImageList] = useState(imageListGlobal);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const photoWidth = 80;

  const handleImagePicker = (event) => {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setImageList([fileURL, ...imageList]);
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex >= 0 ? newIndex : imageList.length - 1);
    sliderRef.current.scrollLeft = newIndex * photoWidth;
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex < imageList.length ? newIndex : 0);
    sliderRef.current.scrollLeft = newIndex * photoWidth;
  };

  return (
    <article className="max-w-3xl relative py-4 flex justify-around customShadow bg-bgcolor1 rounded-lg">
      <Image className="absolute top-5 left-3" src={questionmark} alt="questionmark" width={24} height={24} />
      <Image src={sixSquares} alt="six squares" width={24} height={24} />
      <section className="w-10/12 flex flex-col items-center">
        <section className="w-full self-center mb-4 flex justify-between">
          <span className="px-9 py-5 rounded-2xl bg-bgcolor2 text-white font-semibold">Gallery</span>
          <div className="flex flex-row self-center">
            <button className="buttonShadow h-full mx-5 bg-[#ffffff08] text-white"
                    onClick={() => document.getElementById('imagePicker').click()}>
              <input id='imagePicker' type="file" accept="image/*" className="hidden" onChange={handleImagePicker} />
              <div className="h-full flex gap-2 p-3 justify-center items-center">
                <Image src={plus} alt="plus icon" width={16} height={16} />
                <p>ADD IMAGE</p>
              </div>
            </button>
            <button onClick={handlePrevClick} className="circleButtonShadow mx-5 p-5 bg-bgcolor2 rounded-full">
              <Image src={leftArrow} alt="left arrow" width={24} height={24} />
            </button>
            <button onClick={handleNextClick} className="circleButtonShadow p-5 bg-bgcolor2 rounded-full">
              <Image src={rightArrow} alt="right arrow" width={24} height={24} />
            </button>
          </div>
        </section>
        <br />
        <div className="w-full flex gap-4 pb-2 justify-between overflow-x-auto" ref={sliderRef}>
          {imageList.map((element, index) => (
            <img key={index} className="max-w-44" src={element} alt={`Image ${index}`} />
          ))}
        </div>
      </section>
      <div className="invisible">..</div>
    </article>
  );
}
