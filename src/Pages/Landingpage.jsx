import HeroSec from "../assets/Herosec.jpg"

function Landingpage() {

  return (
    <>
      <div>
      <h1 className="md:text-7xl text-5xl font-bold absolute top-64 left-10 text-white">This is a Landing Page</h1>
      <h1 className="md:text-xl text-base font-medium absolute top-96 md:w-[40vw] w-[80vw] left-10 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad cupiditate. Perspiciatis optio tempore repellat odit aliquid, iusto reprehenderit hic cum cupiditate corporis minima repudiandae quia quis delectus aperiam esse?</h1>
      <img src={HeroSec} alt="" className="w-[100vw] md:h-[100vh] h-[70vh]" />
    </div>
     <div className="flex flex-col items-center justify-center px-6">
        <h1 className="font-bold text-5xl md:mb-16 mb-8 md:mt-20 mt-10">Our Features</h1>
        <div className="flex md:flex-row flex-col items-center justify-around w-[100vw] mx-6">
            <div className="flex flex-col md:w-[25vw] md:h-[30vh] rounded-2xl mb-4">
                <img src={HeroSec} alt="" />
                <h1 className="text-black/60 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?</h1>
                <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">Explore</button>
            </div>
            <div className="flex flex-col md:w-[25vw] md:h-[30vh] rounded-2xl mb-4">
                <img src={HeroSec} alt="" />
                <h1 className="text-black/60 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?</h1>
                <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">Explore</button>
            </div>
            <div className="flex flex-col md:w-[25vw] md:h-[30vh] rounded-2xl">
                <img src={HeroSec} alt="" />
                <h1 className="text-black/60 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?</h1>
                <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">Explore</button>
            </div>
            
        </div>
        <div className="flex md:flex-row flex-col items-center justify-around w-[100vw] mt-40 mx-6">
            <div className="flex flex-col md:w-[25vw] md:h-[30vh] rounded-2xl mb-4">
                <img src={HeroSec} alt="" />
                <h1 className="text-black/60 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?</h1>
                <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">Explore</button>
            </div>
            <div className="flex flex-col md:w-[25vw] md:h-[30vh] rounded-2xl mb-4">
                <img src={HeroSec} alt="" />
                <h1 className="text-black/60 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?</h1>
                <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">Explore</button>
            </div>
            <div className="flex flex-col md:w-[25vw] md:h-[30vh] rounded-2xl">
                <img src={HeroSec} alt="" />
                <h1 className="text-black/60 mt-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum nulla facere assumenda provident modi quasi natus dicta debitis reprehenderit, eligendi ex dolorem?</h1>
                <button className="px-4 py-2 rounded-xl bg-purple-700 text-white">Explore</button>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Landingpage
