import { createContext, useContext } from "react"
import { useState, useEffect } from "react";
import { useCallback } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";



const AppContext = createContext();
const AppContextProvider = (data) => {

    const [searchItem, setSearchItem] = useState('');
    const [loading, setLoading] = useState(true);
    const [cocktail, setCockTail] = useState([]);

    const fetchData = useCallback(async () => {

        try {
            setLoading(true)
            const dataUrl = await fetch(`${url}${searchItem}`).then(res => res.json())
            if (dataUrl) {
                const data = dataUrl.drinks;

                const newCocktail = data.map((data) => {
                    return {
                        name: data.strDrink, id: data.idDrink, alcoholic: data.strAlcoholic, image: data.strDrinkThumb,
                        instructions: data.strInstructions, ingredient1: data.strIngredient1, ingredient2: data.strIngredient2, ingredient3: data.strIngredient3
                    }

                })
                setCockTail(newCocktail)

            } else {
                setCockTail([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [searchItem])

    useEffect(() => {
        fetchData();
    }, [searchItem, fetchData])
    return (
        <AppContext.Provider value={{searchItem,loading,cocktail,setSearchItem}}>
            {data.children}
        </AppContext.Provider>
    )

};
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContextProvider, AppContext };