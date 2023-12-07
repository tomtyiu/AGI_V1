import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";
import EpistemeGPT from "../../../public/EpistemeGPTs.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <div className="text-4xl ml-3 mr-3"></div>
      <Image
        src={EpistemeGPT}
        alt="EpistemeGPT-logo"
        width="100"
        height="100"
        className="mr-3 mt-3"
      />
    </header>
  );
}
