export default function Pricing(){
    return(
        <div className="flex bg-white-900 mx-80 h-80 -mt-16  md:place-content-start sm:place-content-center">
        <div className="bg-purple-50 w-2/5 grid  md:place-content-center rounded justify-center">
        <div className="text-lg font-bold mt-4 justify-center place-content-center px-8">Premium PRO</div>
        <div className="text-5xl font-bold  mt-2 justify-center place-content-center px-8">$329</div>
        <div className=" mt-2 justify-center place-content-center px-8">billed just once</div>
        <button className="mt-8 bg-purple-900 text-white w-48 h-8 rounded">Get Started</button>
        </div>
        <div className="w-3/5 bg-white -ml-1 rounded pt-12 pl-3 mr-3">
        <div>
            <p>Access these features when you get this pricing package for your business.</p>
        </div>
        </div>
        </div>
    );
}