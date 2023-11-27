import batman_img from '../assets/batman_img.png'
import gothamCity from '../assets/gothamCity.webp'
import speechBubble from '../assets/speechbubble.png'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="xl:items-center">
          <h1 className="mt-32 p-5 text-6xl">Behind the mask</h1>  
          <h2 className="ml-16 text-8xl">Who is he?</h2>
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="flex lg:flex-row-reverse mt-32 w-10/12 min-h-screen md:gap-8 mb-32 text-center">
          <div className="mr-16 relative items-center text-center text-4xl xl:text-left xl:px-32 md:text-6xl justify-center">
            <button className="hover:text-slate-700 text-4xl ">The vigilante.</button><br/><br/>
            <button className="hover:text-slate-700 text-6xl">The anti-hero.</button><br/><br/>
            <button className="hover:text-slate-700 text-8xl">THE MAN.</button>
          </div>
          <div className="flex justify-center lg:w-full">
            <Image 
            src={batman_img}
            className='flex items-center mt-8 h-72 w-96 md:w-auto md:h-96 xl:' 
            />
          </div>
        </div>
      </div>
    </>
  );
}
