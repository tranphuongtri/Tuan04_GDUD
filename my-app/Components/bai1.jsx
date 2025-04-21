import { useState } from 'react';

import hinh from "../img/Group 15.png";
import hinh1 from "../img/Archive check.png";
import hinh2 from "../img/Avatar 35.png";
import hinh3 from "../img/List 2.png";
import hinh4 from "../img/Image 105.png";
import hinh5 from "../img/slider 2.png";
import sao5 from '../img/Rating 18.png';
import sao4 from '../img/Rating 17.png';
import sao3 from '../img/Rating 19.png';
import sao2 from '../img/Rating 20.png';
import sao1 from '../img/Rating 16.png';

function Bai01() {
  const [isOpenType, setIsOpenType] = useState(true);
  const [isOpenTime, setIsOpenTime] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="px-4 py-2">
      <header className="flex items-center justify-between px-5 py-3 border-b">
        <img src={hinh} alt="Logo" className="w-20 h-10" />
        <input type="text" className="px-3 py-2 border rounded-md" placeholder="Tìm kiếm..." />
        <nav>
          <ul className="flex gap-4 text-gray-500">
            <li><a href="#" className="hover:text-blue-500">What to cook</a></li>
            <li><a href="#" className="hover:text-blue-500">Recipes</a></li>
            <li><a href="#" className="hover:text-blue-500">Ingredients</a></li>
            <li><a href="#" className="hover:text-blue-500">Occasions</a></li>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
          </ul>
        </nav>
        <div className="relative">
          <img src={hinh1} alt="Icon" className="absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4" />
          <input type="button" value="Your Recipe Box" className="pl-8 py-2 bg-pink-100 text-pink-500 rounded-md cursor-pointer hover:bg-pink-200" />
        </div>
        <img src={hinh2} alt="User Avatar" className="w-8 h-8" />
      </header>

      <div className="flex gap-6 mt-4">
        <section className="w-1/8 space-y-4">
          <div className="border rounded p-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={hinh3} alt="Icon" className="w-6 h-6" />
              <h3 className="font-semibold">Filters</h3>
            </div>
            <div>
              <div className="flex justify-between cursor-pointer border-b py-2" onClick={() => setIsOpenType(!isOpenType)}>
                <span className="font-semibold">Type</span>
                <span>{isOpenType ? "▼" : "▲"}</span>
              </div>
              {isOpenType && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="flex flex-col gap-2">
                    <label><input type="checkbox" /> Pan-fried</label>
                    <label><input type="checkbox" defaultChecked /> Grilled</label>
                    <label><input type="checkbox" /> Sauteed</label>
                    <label><input type="checkbox" /> Steamed</label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label><input type="checkbox" /> Stir-fried</label>
                    <label><input type="checkbox" defaultChecked /> Roasted</label>
                    <label><input type="checkbox" /> Baked</label>
                    <label><input type="checkbox" /> Stewed</label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border rounded p-4">
            <div className="flex justify-between cursor-pointer border-b py-2" onClick={() => setIsOpenTime(!isOpenTime)}>
              <span className="font-semibold">Time</span>
              <span>{isOpenTime ? "▼" : "▲"}</span>
            </div>
            {isOpenTime && (
              <div className="relative w-full mt-3">
                <img src={hinh5} alt="Time" className="w-40" />
                <p className="absolute text-sm">30 minutes</p>
                <p className="absolute left-2/3 text-sm">50 minutes</p>
              </div>
            )}
          </div>

          <div className="border rounded p-4">
            <div className="flex justify-between cursor-pointer border-b py-2" onClick={() => setIsOpen(!isOpen)}>
              <span className="font-semibold">Rating</span>
              <span>{isOpen ? "▼" : "▲"}</span>
            </div>
            {isOpen && (
              <div className="flex flex-col gap-2 mt-2">
                {[sao5, sao4, sao3, sao2, sao1].map((imgSrc, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked={idx >= 2} />
                    <img src={imgSrc} alt="Rating" className="w-20" />
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="border rounded p-4 text-center">
            <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500">Apply</button>
          </div>
        </section>

        <aside className="w-2/3 align-items-center">
          <h2 className="text-xl font-semibold">Sorry, no result were found for "cakescascsa"</h2>
          <img src={hinh4} alt="Not Found" className="my-4" />
          <p>We have all your Independence Day sweets covered.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full">Sweet Cake</button>
            <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">Black Cake</button>
            <button className="bg-pink-50 text-pink-400 px-4 py-2 rounded-full">Pozole Verde</button>
            <button className="bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full">Healthy food</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Bai01;
