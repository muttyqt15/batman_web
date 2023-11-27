import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ logo, font }) {
    return (
        <nav className="fixed z-50 top-0 left-0 right-0 border-b-2 bg-slate-950 border-gray-600 ring-gray-600 ring-b-2 min-w-full h-20 flex items-center">
        <div className="flex justify-between w-full p-5">
          <a href="/" className="flex items-center">
            <Image 
              src={logo}
              className="h-12 w-12"
            />
          </a>
          <div className={`${font} flex items-center gap-4 ml-8`}>
            <Link href="/shop/" className="hover:text-slate-400">Shop</Link>
            <Link href="/" className="hidden md:flex hover:text-slate-400">Home</Link>
            <Link href="/about/" className="hover:text-slate-400">About</Link>
          </div>
          <Link href="" className="flex items-center border-2 border-yellow-500 px-6 rounded-2xl hover:bg-slate-700 hover:scale-90 transition-transform duration-300 ease-in-out ">
            <p className={font}>Login</p>
          </Link>
        </div>
      </nav>
    );
}