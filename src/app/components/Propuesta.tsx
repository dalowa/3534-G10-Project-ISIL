import Image from "next/image";

const Propuesta = ({
  userName,
  userText,
}: {
  userName: string;
  userText: string;
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <h4 className="bg-blue-600 text-white p-2 text-center w-4/12 text-userName">
            {userName}
          </h4>
        </div>
        <figure className="flex border border-blue-500">
          <Image
            src={
              "https://raw.githubusercontent.com/dalowa/3534-G10-Project-ISIL/main/public/user.png"
            }
            alt="user"
            width={250}
            height={0o0}
            className="w-4/12 h-auto border-2 border-blue-500"
          />
          <div className="w-8/12 p-1 flex items-center lg:py-10">
            <p className="text-userText text-center w-11/12 mx-auto">
              {userText}
            </p>
          </div>
        </figure>
      </div>
    </>
  );
};

export default Propuesta;
