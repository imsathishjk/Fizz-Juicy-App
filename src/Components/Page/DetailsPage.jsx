import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader";

export const DetailsPage = () => {
    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState('');
    const [error, setError] = useState('');
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json())

                const { drinks } = data;
                if (drinks) {
                    const {
                        strDrink: name,
                        strAlcoholic: alcoholic,
                        strDrinkThumb: image,
                        strGlass: glass,
                        strIngredient1: ingredient1,
                        strIngredient2: ingredient2,
                        strIngredient3: ingredient3,
                        strIntructions: instructions
                    } = drinks[0]

                    const newCocktail = {
                        name, alcoholic, image, glass, instructions, ingredient1, ingredient2, ingredient3
                    }
                    setCocktail(newCocktail)
                    console.log(newCocktail)

                }
                setLoading(false)


            } catch (error) {
                console.log(error)
                setLoading(false)
                setCocktail([])
                setError("No Data founded")
            }
        }
        fetchData()
       
    }, [id])
    return (
        <div className="mt-[100px] flex flex-col items-center gap-12">
            <div className="my-5 flex justify-center">
                <Link to={"/"} className="px-4 py-2 bg-[#F06292] text-white rounded-md">Back to Home</Link>
            </div>
            {
                error ? <p className="text-xl text-red-500">{error}</p> : ""
            }

            {
                loading ? <Loader /> : <div className="flex flex-col md:flex-row md:gap-48 gap-5 justify-center items-center">
                    <div className="">
                        <img src={cocktail.image} alt={cocktail.name} className="w-60" />
                        <h1 className="text-center text-lg font-bold bg-white border-b-4 border-[#F06292] py-2 text-wrap">{cocktail.name}</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex gap-4 items-center">
                            <p className="">Name:</p>
                            <p className="">{cocktail.name} </p>
                        </div>
                        <div className="inline-flex gap-4 items-center">
                            <p>Info:</p>
                            <p>{cocktail.alcoholic}</p>
                        </div>
                        <div className="inline-flex gap-4 items-center">
                            <p>Glass:</p>
                            <p>{cocktail.glass}</p>
                        </div>
                        <div className="inline-flex gap-4 items-center">
                            <p>Instructions:</p>
                            <p>{typeof (cocktail.instructions) === "undefined" ? "No Result to show" : cocktail.instructions}</p>
                        </div>
                        <div className="inline-flex gap-4 items-center">
                            <p>Ingredients:</p>
                            <p className="bg-[#FFCDD2] text-black px-2 py-2 rounded-md">{cocktail.ingredient1},</p>
                            <p className="bg-[#FFCDD2] text-black px-2 py-2 rounded-md">{cocktail.ingredient2}, </p>
                            <p className="bg-[#FFCDD2] text-black px-2 py-2 rounded-md">{typeof(cocktail.ingredient3)==="object"?"No Result":cocktail.ingredient3}</p>
                        </div>

                    </div>
                </div>
            }

        </div>

    )
}