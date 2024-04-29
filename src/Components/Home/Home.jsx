import { useGlobalContext } from "../../Context";
import "../../index.css";
import { Loader } from "../Loader/Loader";
import { CockTail } from "./CocktailComp";
import { SearchComp } from "./SearchComp";
export const Home = () => {

    const { loading } = useGlobalContext();

    return (
        <div className="flex flex-col gap-16 items-center mt-12">
            <SearchComp />
            {
                loading ? <Loader /> : <CockTail />
            }

        </div>
    )
}