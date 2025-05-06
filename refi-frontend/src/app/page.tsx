import Header from "./components/Landing/Header";
import Content from "./components/Landing/Content";
import Features from "./components/Landing/Features";
import   Footer  from "./components/Landing/Footer";

const Landing = ()=>{
  return (
    <>
    <div className="flex flex-col bg-black  h-full">
        <div className="py-5 flex justify-center">
          <Header />
        </div>
        <div className="py-20">
          <Content />
        </div>

        <div className="py-20">
          <Features id="features" />
        </div>

        <div>
          <Footer />
        </div>
    </div>
    </>
  )
}

export default Landing;

