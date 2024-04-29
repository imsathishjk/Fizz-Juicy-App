import { useGlobalContext } from "../../Context"

export const SearchComp = () => {
    const{searchItem,setSearchItem} = useGlobalContext();

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }

    return (
        <div className="bg-white px-10 py-3 rounded-md shadow-xl border-b-4 border-[#FFCDD2]  mt-[80px]">
            <div className="flex items-center gap-4 justify-between w-full
        px-4 py-2 border border-[#F06292] rounded-3xl">
                <input type="text" placeholder="Search Your Favorite Fizz" className="border-none outline-none bg-transparent" value={searchItem} onChange={handleSearch} />
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
            </div>

        </div>
    )
}