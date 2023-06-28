"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProblemaSec() {
  const [indexImages, setIndexImages] = useState<number>(0);

  useEffect(() => {
    const interValid = setInterval(() => {
      setIndexImages((indexImages) => (indexImages + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(interValid);
    };
  });
  return (
    <>
      <div className="font-semibold">
        <div className="flex flex-col lg:flex-row">
          <h3 className="bg-blue-500 text-white py-1 px-2 rounded text-subtitle lg:w-4/12 lg:text-center">
            PROBLEMA ACTUAL :
          </h3>
          <h4 className="text-blue-500 py-1 px-2 text-subtitle lg:w-8/12 lg:text-center">
            Falta de alumbrado público
          </h4>
        </div>
        <figure className="bg-blue-400 py-4 lg:py-20">
          <Image
            src={`https://raw.githubusercontent.com/dalowa/3534-G10-Project-ISIL/main/public/imagen0${indexImages}.jpg`}
            alt="Image 1"
            width={150}
            height={0o0}
            className="w-11/12 mx-auto lg:w-9/12"
          />
        </figure>
      </div>
    </>
  );
}
