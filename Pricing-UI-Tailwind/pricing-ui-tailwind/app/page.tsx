import Footer from "./Destopfooter";
import Header from "./header";
import Pricing from "./pricing";
import MFooter from "./mobileFooter";

export default function Page(){
    return (
      <div>
        <div>  <Header></Header></div>
        <div className="sm:mb-20 "> <Pricing></Pricing></div>
        <div className="hidden sm:block"> <Footer></Footer></div>
        <div className="sm:block md:hidden lg:hidden pt-80"> <MFooter></MFooter></div>
      </div>
    );
}