import './reclamaciones.css';
import Image from "next/image";
import logoLegales from "@/public/headerFooter/logoFooter.webp";

export default function Page() {
  return (
    <div className='h-screen'>
      {/* Section with logo */}
      <div className='bg-[#6f4be8] flex justify-center items-center'>
        <Image src={logoLegales} className='my-10' alt="Digimedia" width={160} height={120} />
      </div>
    </div>
  );
}