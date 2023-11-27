import batman from '../assets/batman.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 border-b-2 bg-slate-950 border-gray-600 ring-gray-600 ring-b-2 min-w-full h-20 flex items-center">
        <div className="flex justify-between w-full p-5">
          <a href="/" className="flex items-center">
            <Image 
              src={batman}
              className="h-12 w-12"
            />
          </a>
          <div className="flex items-center gap-4 ml-8">
            <h1>Shop</h1>
            <h1 className="hidden md:flex">Home</h1>
            <h1 className="">About</h1>
          </div>
          <button className="flex items-center border-2 border-yellow-500 px-6 rounded-2xl">
              Login
          </button>
        </div>
      </nav>
      
      <div className="flex items-center justify-center">
        <div className="flex flex-col mt-32 w-10/12 min-h-screen gap-4">
          <div className="relative text-center xl:text-left xl:ml-44">
            test
          </div>
        </div>
      </div>
    </>
  );
}
