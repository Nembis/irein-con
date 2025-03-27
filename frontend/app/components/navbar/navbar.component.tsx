import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between mx-auto h-auto p-4 bg-secondary-blue">
      <div className="w-32">
        <Link href={"/"}>
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={518}
            height={237}
            sizes="208px"
            className="w-full h-auto"
          />
        </Link>
      </div>
      <div className="flex items-center w-full">
        <ul className="w-full flex justify-around text-white">
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Events</li>
          <li className="hover:cursor-pointer">Temp</li>
        </ul>
      </div>
    </div>
  );
};
