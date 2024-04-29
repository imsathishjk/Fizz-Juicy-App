import "../../index.css";



export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#F48FB1] shadow-xl fixed top-0 w-full">
            <div className="flex gap-1 items-center">
                <i className="fa-solid fa-champagne-glasses text-2xl "></i>
                <h1 className="text-3xl font-bold ">Mr.Fizz</h1>
            </div>
        </nav>
    )
}