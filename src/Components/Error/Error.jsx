import { Link } from "react-router-dom"

export const Error = () => {
    return(
        <div className="flex flex-col gap-5 items-center justify-center mt-48">
            <p className="text-5xl">404</p>
            <h1 className="text-xl text-red-500">Items does not match with databases. Please try with some other name!</h1>
            <Link to={"/"}className="px-4 py-2 bg-[#4CAF50] text-white rounded-md">Back to Home</Link>
        </div>
    )
}