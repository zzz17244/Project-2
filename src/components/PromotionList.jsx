import React, { useState } from "react";

const PromotionList = () => {
  const promotions = [
    { from: "清迈", destination: "乌隆他尼", price: 2029 },
    { from: "曼谷（廊曼）", destination: "乌汶", price: 855 },
    { from: "彭世洛", destination: "曼谷（廊曼）", price: 855 },
    { from: "曼谷（廊曼）", destination: "乌隆他尼", price: 855 },
    { from: "曼谷（廊曼）", destination: "清迈", price: 855 },
    { from: "彭世洛", destination: "曼谷（廊曼）", price: 855 },
    { from: "曼谷（廊曼）", destination: "乌隆他尼", price: 855 },
    { from: "曼谷（廊曼）", destination: "清迈", price: 855 },
    { from: "彭世洛", destination: "曼谷（廊曼）", price: 855 },
    { from: "曼谷（廊曼）", destination: "乌隆他尼", price: 855 },
    { from: "曼谷（廊曼）", destination: "清迈", price: 855 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < promotions.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full mt-8">
      <button
        onClick={handlePrev}
        className="absolute left-0 bg-transparent border-none text-2xl cursor-pointer p-2 m-4"
      >
        &lt;
      </button>
      <div className="flex overflow-hidden w-4/5">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 10}%)` }}
        >
          {promotions.map((promo, index) => (
            <PromotionCard
              key={index}
              from={promo.from}
              destination={promo.destination}
              price={promo.price}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 bg-transparent border-none text-2xl cursor-pointer p-2 m-4"
      >
        &gt;
      </button>
    </div>
  );
};

export default PromotionList;

const PromotionCard = ({ from, destination, price }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 mx-2 text-center bg-white min-w-[200px]">
      <div className="mb-2">
        <div className="text-sm text-gray-700">{from}</div>
        <div className="text-sm text-gray-700">{destination}</div>
      </div>
      <div className="text-xl text-yellow-500 mt-4">
        起价 <span className="font-bold">{price} 泰铢</span>
      </div>
    </div>
  );
};
