import { MoneyBackGuaranteeIcon, MonthlySubIcon, NoSetupFeeIcon } from "./icons";

export default function MFooter(){
    return(
        <div className="sm:flex-col justify-center -mt-70">
            <div className="flex sm:flex-row px-2 my-4"> <span className="w-2 h-2"><MoneyBackGuaranteeIcon></MoneyBackGuaranteeIcon></span>
            <p className="pt-1 font-bold ml-12 h-8">30 days money back Guarantee</p>
            </div>  
            <div className="flex sm:flex-row px-2 my-4"><span className="w-2 h-2"><NoSetupFeeIcon></NoSetupFeeIcon></span>
            <p className="pt-1 font-bold ml-12 h-8">No setup fees 100% hassle-free</p>
            </div> 
            <div className="flex sm:flex-row px-2 h-8 my-4"> <span className="w-2 h-2"><MonthlySubIcon></MonthlySubIcon></span>
            <p className="pt-1 font-bold ml-12">No monthly subscription Pay once and for all</p>
            </div> 
        </div>
    )
}