import Herosec from "../assets/Herosec.jpg"
function HeroSection() {
  return (
    <div>
      <h1 className="md:text-7xl text-5xl font-bold absolute top-64 left-10 text-white">This is a Landing Page</h1>
      <h1 className="md:text-xl text-base font-medium absolute top-96 md:w-[40vw] w-[80vw] left-10 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad cupiditate. Perspiciatis optio tempore repellat odit aliquid, iusto reprehenderit hic cum cupiditate corporis minima repudiandae quia quis delectus aperiam esse?</h1>
      <img src={Herosec} alt="" className="w-[100vw] md:h-[100vh] h-[70vh]" />
    </div>
  )
}

export default HeroSection
