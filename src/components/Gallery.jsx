import React from "react";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import i5 from "../assets/5.jpg";
import i6 from "../assets/6.jpg";
import i7 from "../assets/7.jpg";
import i8 from "../assets/8.jpg";
import i9 from "../assets/9.jpg";
import i10 from "../assets/10.jpg";
import i11 from "../assets/11.jpg";
import i12 from "../assets/12.jpg";

const Gallery = () => {
  return (
    <div className="sm:p-24 pt-5 pb-14 px-[12px]">
      <h1 className="text-#1F2937 sm:text-4xl text-2xl mt-[60px] sm:mb-16 mb-8  font-semibold">Uy uchun g'oyalar</h1>
      <div className="gallery">
        <img className="i1" src={i1} alt="" />
        <img className="i2" src={i2} alt="" />
        <img className="i3" src={i3} alt="" />
        <img className="i4" src={i4} alt="" />
        <img className="i5" src={i5} alt="" />
        <img className="i6" src={i6} alt="" />
        <img className="i7" src={i7} alt="" />
        <img className="i8" src={i8} alt="" />
        <img className="i9" src={i9} alt="" />
        <img className="i10" src={i10} alt="" />
        <img className="i11" src={i11} alt="" />
        <img className="i12" src={i12} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
