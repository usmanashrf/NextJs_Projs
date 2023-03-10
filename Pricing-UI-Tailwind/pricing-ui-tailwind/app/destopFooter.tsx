import { MoneyBackGuaranteeIcon, MonthlySubIcon, NoSetupFeeIcon } from "./icons";

export default function Footer(){
    return(
        <div className="flex justify-center mt-16">
            <div className="flex sm:flex-row px-2"><MoneyBackGuaranteeIcon></MoneyBackGuaranteeIcon>
            <p className="pt-1 font-bold ml-2">30 days money back Guarantee</p>
            </div>  
            <div className="flex sm:flex-row px-2"><NoSetupFeeIcon></NoSetupFeeIcon>
            <p className="pt-1 font-bold ml-2">No setup fees 100% hassle-free</p>
            </div> 
            <div className="flex sm:flex-row px-2"><MonthlySubIcon></MonthlySubIcon>
            <p className="pt-1 font-bold ml-2">No monthly subscription Pay once and for all</p>
            </div> 
        </div>
    )
}