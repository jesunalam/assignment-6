import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-[#0a0b0e] border-t border-[#1e222d] text-white py-6 px-6 md:px-12 mt-10">
      <div className="max-w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[#ccff00]">
            <Image src="/logo.png" alt="Logo" width={30} height={30} className="object-contain" />
          </div>
          <span className="font-black text-xl tracking-wider uppercase">
            FITLOG
          </span>
        </Link>

        {/* RIGHT: COPYRIGHT TEXT */}
        <p className="text-gray-400 text-xs tracking-wide text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;