import Image from "next/image";

export default function Contactanos() {
  return (
    <>
      <section className="bg-blue-500 w-full p-3 py-5 text-white">
        <div className="flex items-center">
          <h4 className="text-contactanosText">Contactanos:</h4>
          <div className="w-full flex items-center justify-center gap-5 lg:gap-20">
            <a
              target="_blank"
              href="https://instagram.com/vecinosmuyunidos?igshid=NGExMmI2YTkyZg== "
              className="flex gap-5 items-center hover:scale-105 transition"
            >
              {"Instagram =>"}
              <Image
                src={
                  "https://raw.githubusercontent.com/dalowa/3534-G10-Project-ISIL/main/public/instagram.png"
                }
                alt="instagram"
                width={250}
                height={0o0}
                className="w-1/12 lg:w-20"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
