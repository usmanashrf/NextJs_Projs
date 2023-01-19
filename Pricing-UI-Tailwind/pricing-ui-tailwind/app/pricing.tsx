import { CheckIcon } from "./icons";
export default function Pricing() {
  return (
    <div>
      <div className="bg-purple-900">
        {" "}
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
      </div>
      <div className="sm:mx-10 md:flex self-center max-w-4xl mx-auto md:mx-auto h-80 md:h-80 sm:h-auto  bg-white-900 -mt-24 md:border-b-4 sm:border-b-0 place-content-center border-gray-300">
        <div className="bg-purple-50  grid min-w-96 w-96 md:place-content-center rounded justify-center">
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
        <div className="w-3/5 bg-white -ml-1 rounded pt-12 pl-3">
          <div className="text-left">
            <p>
              Access these features when you get this pricing package for your
              business.
            </p>
          </div>
          <div>
            <div className="pt-4 pl-2 text-center sm:text-left md:text-left md:border-b-0 sm:border-b-4 border-gray-300">
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
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
        <br className="md:hidden sm:visible" />
      </div>
    </div>
  );
}
