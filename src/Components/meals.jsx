import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer";
import Details from "./details";

export default function Meal(){
    let mealId = useParams("idMeal")

    const [meal, setMeal] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.idMeal}`)
        .then( response => response.json() )
        .then(
            json => {
                setMeal(json.meals[0])
            }
        )   
        .catch(error => {
            console.log(error)
        })

    }, [mealId.idMeal])

    
    return (
        <div>
            <Navigation />
            <Details meals={meal} />
            <Footer />
        </div>
    )
}