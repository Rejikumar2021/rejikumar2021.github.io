import Image from "next/image";
interface serviceProps {
  image: string;
  heading: string;
  description: string;
}
const serviceItems = ({ image, heading, description }: serviceProps) => {
  return (
    <>
      <div className="group shadow-lg p-6 rounded h-full flex flex-col cursor-pointer hover:bg-[#6249d4]">
        <Image
          src={`/assets/${image}`}
          height={150}
          width={150}
          alt="profile image"
          className="m-auto"
        />
        <p className="text-center uppercase py-4 text-[#330ae8] group-hover:text-white font-semibold text-[20px] md:text-[24px]">
          {heading}
        </p>
        <p className="pb-2 px-2 group-hover:text-white">{description}</p>
      </div>
    </>
  );
};

export default serviceItems;
