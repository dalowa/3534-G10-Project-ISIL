import Image from "next/image";

export default function Contactanos() {
  return (
    <>
      <section className="bg-blue-500 w-full p-2 text-white">
        <div>
          <h4>Contactanos:</h4>
          <div className="w-full flex items-center justify-center gap-5">
            <Image
              src={
                "https://raw.githubusercontent.com/dalowa/3534-G10-Project-ISIL/main/public/instagram.png"
              }
              alt="instagram"
              width={250}
              height={0o0}
              className="w-1/12"
            />
            <Image
              src={
                "https://raw.githubusercontent.com/dalowa/3534-G10-Project-ISIL/main/public/facebook.png"
              }
              alt="facebook"
              width={250}
              height={0o0}
              className="w-1/12"
            />
          </div>
        </div>
      </section>
    </>
  );
}
