import Header from "./components/Landing/Header";
import Content from "./components/Landing/Content";


const Landing = ()=>{
  return (
    <>
    <div className="flex flex-col bg-black h-screen">
        <div className="py-5 flex justify-center">
          <Header />
        </div>
        <div className="py-2">
          <Content />
        </div>
    </div>
    </>
  )
}

export default Landing;

