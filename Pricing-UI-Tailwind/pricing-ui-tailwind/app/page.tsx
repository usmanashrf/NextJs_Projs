import Footer from "./destopFooter";
import Header from "./header";
import Pricing from "./pricing";
import MFooter from "./mobileFooter";
import MobilePricing from "./mobilePricing";
import MobileHeader from "./mobileHeader";

export default function Page(){
    return (
      <div>
        <div className="sm:block md:hidden lg:hidden"><MobileHeader></MobileHeader></div>
        <div className="hidden sm:block"> <Header></Header></div>
        <div className="sm:block md:hidden lg:hidden "><MobilePricing></MobilePricing></div>
        <div className="sm:mb-20 hidden sm:block"> <Pricing></Pricing></div>
        <div className="hidden sm:block"> <Footer></Footer></div>
        <div className="sm:block md:hidden lg:hidden pt-80"> <MFooter></MFooter></div>
      </div>
    );
}