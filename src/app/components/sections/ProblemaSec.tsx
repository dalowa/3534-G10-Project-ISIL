"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProblemaSec() {
  const [indexImages, setIndexImages] = useState<number>(1);

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
        <div>
          <h3 className="bg-blue-500 text-white py-1 px-2 rounded text-subtitle">
            Problema actual:
          </h3>
          <h4 className="text-blue-500 py-1 px-2 text-subtitle">
            Falta de alumbrado público
          </h4>
        </div>
        <figure className="bg-blue-400 py-4">
          <Image
            src={`https://raw.githubusercontent.com/dalowa/3534-G10-Project-ISIL/main/public/imagen0${indexImages}.jpg`}
            alt="Image 1"
            width={150}
            height={0o0}
            className="w-11/12 mx-auto"
          />
        </figure>
      </div>
    </>
  );
}
