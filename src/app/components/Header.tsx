import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";
import EPISTEAI from "../../../public/EPISTEAI.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <div className="text-4xl ml-3 mr-3"></div>
      <Image
        src={EPISTEAI}
        alt="EPISTEAI-logo"
        width="160"
        height="50"
        className="mr-3 mt-3"
      />
    </header>
  );
}
