import { CheckIcon } from "./icons";
export default function MobilePricing() {
  return (
      <div className=" flex-col -mt-40 h-115 border-2 sm:border-b-4  mx-3 place-content-center rounded border-gray-300">
        <div className="bg-purple-50 pb-1  grid  rounded justify-center">
          <div className="text-lg font-bold mt-4 justify-center place-content-center px-8 md:px-8 sm:px-8">
            Premium PRO
          </div>
          <div className="text-5xl font-bold  mt-2 justify-center place-content-center px-8 md:px-8 sm:px-8">
            $329
          </div>
          <div className=" mt-2 justify-center place-content-center px-8 md:px-8 sm:px-8">
            billed just once
          </div>
          <button className="mt-8 bg-purple-900 text-white w-48 h-8 rounded">
            Get Started
          </button>
        </div>
        <div className=" bg-white rounded pt-12 pl-3">
          <div className="text-left">
            <p>
              Access these features when you get this pricing package for your
              business.
            </p>
          </div>
          <div>
            <div className="pt-4 pl-2 text-center md:border-b-0 sm:border-b-4 border-gray-300">
              <div className="flex mt-4">
                {" "}
                <CheckIcon />{" "}
                <p className="ml-2">International calling and messaging API</p>
              </div>
              <div className="flex mt-4">
                {" "}
                <CheckIcon /> <p className="ml-2">Additional phone numbers</p>
              </div>
              <div className="flex mt-4">
                {" "}
                <CheckIcon />{" "}
                <p className="ml-2">Automated messages via Zapier</p>
              </div>
              <div className="flex mt-4">
                {" "}
                <CheckIcon />{" "}
                <p className="ml-2">24/7 support and consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
