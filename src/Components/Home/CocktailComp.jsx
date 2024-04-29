import { Link } from "react-router-dom";

import { useGlobalContext } from "../../Context"

export const CockTail = () => {

    const { cocktail } = useGlobalContext();

    return (
        <div className="flex flex-col items-center gap-12 bg-white py-5 rounded-lg">
            
            <h1 className="text-xl font-medium text-black text-center p-4">Quench Your Thirst with Refreshing Fizz !</h1>



            <div className="flex justify-around gap-12 flex-wrap">
                {
                    cocktail.map((item, index) => {
                        return (
                            <div key={index} className="rounded-xl shadow-lg w-72">
                                <img src={item.image} alt={item.name} className="" />
                                <div className="bg-white border-b-4 border-[#F06292] py-2">
                                    <h1 className="text-lg text-[#F06292] font-semibold text-wrap text-center">{item.name}</h1>
                                    <div className="flex justify-between items-center mx-2 my-2">
                                        <button><Link to={`/cocktail/${item.id}`} className="bg-[] px-2 py-2 rounded-lg hover:bg-[#FFCDD2] hover:text-black">Details</Link></button>
                                        <h2 className="text-md text-right font-medium text-[#FFCDD2]">{item.alcoholic}</h2>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}